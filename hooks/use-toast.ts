'use client';

/**
 * Sistema de notificaciones toast inspirado en react-hot-toast
 * Proporciona un sistema de notificaciones toast accesible globalmente 
 * con una interfaz de hook de React.
 * 
 * @module toast
 */
import * as React from 'react';
import type { ToastActionElement, ToastProps } from '@/components/ui/toast';

// Constantes de configuración
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 10000; // Cambiado a 10 segundos (antes era 1,000,000ms)

// Tipos
export interface ToasterToast extends ToastProps {
  id: string;
  title?: string;
  description?: React.ReactNode;
  action?: ToastActionElement;
}

type Toast = Omit<ToasterToast, 'id'>;

// Tipos de acciones como enum para mejor seguridad de tipos
enum ActionType {
  ADD_TOAST = 'ADD_TOAST',
  UPDATE_TOAST = 'UPDATE_TOAST',
  DISMISS_TOAST = 'DISMISS_TOAST',
  REMOVE_TOAST = 'REMOVE_TOAST'
}

// Interfaces de acciones
type Action =
  | { type: ActionType.ADD_TOAST; toast: ToasterToast }
  | { type: ActionType.UPDATE_TOAST; toast: Partial<ToasterToast> }
  | { type: ActionType.DISMISS_TOAST; toastId?: string }
  | { type: ActionType.REMOVE_TOAST; toastId?: string };

// Interfaz de estado
interface State {
  toasts: ToasterToast[];
}

// Generador de ID con mejor seguridad de tipos
let toastIdCounter = 0;

function generateToastId(): string {
  toastIdCounter = (toastIdCounter + 1) % Number.MAX_SAFE_INTEGER;
  return toastIdCounter.toString();
}

// Gestión de timeouts de los toasts
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Añade un toast a la cola de eliminación después del tiempo especificado
 * @param toastId ID del toast a eliminar
 */
const scheduleToastRemoval = (toastId: string): void => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/**
 * Limpia todos los timeouts de toasts para prevenir fugas de memoria
 */
const clearAllToastTimeouts = (): void => {
  toastTimeouts.forEach(timeout => clearTimeout(timeout));
  toastTimeouts.clear();
};

/**
 * Función reductora para gestionar el estado de los toasts
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case ActionType.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(toast =>
          toast.id === action.toast.id ? { ...toast, ...action.toast } : toast
        ),
      };

    case ActionType.DISMISS_TOAST: {
      const { toastId } = action;

      // Schedule all toasts for removal when toastId is undefined
      if (toastId === undefined) {
        state.toasts.forEach(toast => {
          scheduleToastRemoval(toast.id);
        });
      } else {
        scheduleToastRemoval(toastId);
      }

      return {
        ...state,
        toasts: state.toasts.map(toast =>
          toast.id === toastId || toastId === undefined
            ? { ...toast, open: false }
            : toast
        ),
      };
    }

    case ActionType.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }

      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.toastId),
      };

    default:
      // Added exhaustive type checking
      return state;
  }
};

// Gestión de estado
const listeners: Array<React.Dispatch<React.SetStateAction<State>>> = [];
let memoryState: State = { toasts: [] };

/**
 * Despacha una acción para actualizar el estado de los toasts
 * @param action La acción a despachar
 */
function dispatch(action: Action): void {
  memoryState = reducer(memoryState, action);
  listeners.forEach(listener => {
    listener(memoryState);
  });
}

/**
 * Crea una nueva notificación toast
 * @param props Propiedades del toast
 * @returns Objeto de control del toast con métodos id, dismiss y update
 */
function toast(props: Toast) {
  const id = generateToastId();

  const update = (props: Partial<ToasterToast>): void =>
    dispatch({
      type: ActionType.UPDATE_TOAST,
      toast: { ...props, id },
    });

  const dismiss = (): void =>
    dispatch({ type: ActionType.DISMISS_TOAST, toastId: id });

  dispatch({
    type: ActionType.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
}

/**
 * Hook de React para usar el sistema de toasts
 * @returns Estado de los toasts y métodos de control
 */
function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);

    // Cleanup function to prevent memory leaks
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  // Cleanup all timeouts when component unmounts
  React.useEffect(() => {
    return () => {
      if (listeners.length === 0) {
        clearAllToastTimeouts();
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({
      type: ActionType.DISMISS_TOAST,
      toastId
    }),
  };
}

export { useToast, toast };
