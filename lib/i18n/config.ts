import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            about: 'About me',
            downloadCV: 'Download CV'
          },
          hero: {
            greeting: 'Hello! 👋',
            role: 'Full Stack Jr. Developer',
            description: 'Creating innovative digital solutions and unique web experiences.',
            viewProjects: 'View Projects',
            aboutMe: 'About Me'
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: 'Inicio',
            experience: 'Experiencia',
            projects: 'Proyectos',
            skills: 'Tecnologías',
            about: 'Sobre mí',
            downloadCV: 'Descargar CV'
          },
          hero: {
            greeting: '¡Hola! 👋',
            role: 'Desarrollador Full Stack Jr.',
            description: 'Creando soluciones digitales innovadoras y experiencias web únicas.',
            viewProjects: 'Ver Proyectos',
            aboutMe: 'Sobre Mí'
          }
        }
      }
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;