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
            aboutMe: 'About Me',
            degree: 'Higher University Technician in Information Technologies, Software Development Area'
          },
          about: {
            title: 'About Me',
            academicFormation: 'Academic Formation',
            degree1: 'Engineering in Software Development and Management',
            degree1Status: 'In progress',
            degree2: 'Higher University Technician in Information Technologies',
            degree2Area: 'Software Development Area',
            degree2Status: 'Completed',
            professionalProfile: 'Professional Profile',
            introduction: 'Hi, I am {{name}}, but you can call me Neft or Nefta. My first contact with technology was at the age of 18, when I started learning about PC repair, operating system installation, and blog creation. Although I studied Industrial Maintenance, I decided to shift towards programming, an area I am passionate about.',
            studies: 'I recently completed the {{degree}} and I am now pursuing the {{currentDegree}}.',
            skillsIntro: 'During my studies and professional experience, I have developed skills in:',
            skills: [
              'Databases: PostgreSQL, MySQL, MongoDB',
              'Web development: HTML, CSS, JavaScript, React',
              'Backend: Node.js (Express), PHP (Slim, Laravel)',
              'Mobile development: React Native, Android Studio',
              'Version control: Git & GitHub',
              'Agile methodologies: SCRUM'
            ],
            closing: 'As a Junior Full Stack Developer, I constantly stay updated with the latest trends in software development and enjoy creating innovative technological solutions that solve real-world problems.'
          },
          skills: {
            title: 'Technologies',
            description: 'During my journey in the world of software development, I have cultivated experience and skills in a variety of technologies, some out of passion and others out of necessity for projects.',
            frontend: {
              title: 'Frontend',
              html: 'HTML',
              css: 'CSS',
              javascript: 'JavaScript',
              reactNative: 'React Native',
              reactJS: 'ReactJS',
              astro: 'Astro',
              tailwindCSS: 'TailwindCSS',
              bootstrap: 'Bootstrap',
              vue: 'Vue.js'
            },
            backend: {
              title: 'Backend',
              slimPHP: 'Slim PHP',
              express: 'Express',
              laravel: 'Laravel',
              mySQL: 'MySQL',
              mongoDB: 'MongoDB',
              nodeJS: 'Node.js',
              spring: 'Spring',
              fastAPI: 'FastAPI',
              postgreSQL: 'PostgreSQL'
            },
            tools: {
              title: 'Tools',
              git: 'Git',
              gitHub: 'GitHub',
              npm: 'NPM',
              ubuntu: 'Ubuntu',
              postman: 'Postman',
              yarn: 'Yarn',
              expo: 'Expo',
              vsCode: 'VS Code',
              androidStudio: 'Android Studio'
            }
          },
          experience: {
            title: 'Work Experience',
            description: 'My professional journey in software development, where each project has contributed to my growth as a developer.',
            items: [
              {
                period: 'April 2025 - Present',
                title: 'Frontend Web Developer',
                company: 'Espora',
                project: 'Enterprise Web Platforms and Policies',
                description: 'Design and development of enterprise web platforms using React, Next.js, and Vite',
                direction: 'left'
              },
              {
                period: 'January 2025 - July 2025',
                title: 'Fullstack Jr. Developer',
                company: 'Grupo Comercial Bracarda',
                project: 'Adventy Travels Tourism Website',
                description: 'Development and maintenance of a tourism web platform using React and Vite',
                direction: 'right'
              },
              {
                period: 'September 2024 - April 2025',
                title: 'Mobile Frontend Developer',
                company: 'XicoNemi by DreamTeam',
                project: 'XicoNemi App',
                description: 'Development of a tourism mobile app using React Native and Expo',
                direction: 'left'
              },
              {
                period: 'April 2024 - August 2024',
                title: 'Fullstack Jr. Developer',
                company: 'Startdust S.A DE C.V',
                project: 'Ultra Trail App',
                description: 'Implementation of payment systems and ticket management',
                direction: 'right'
              }
            ]
          },
          projects: {
            title: 'Featured Projects',
            viewCode: 'View Code',
            viewDemo: 'View Demo',
            descriptions: {
              portfolio: 'Portfolio built with Next.js, TypeScript, and Tailwind. Fully responsive with light and dark modes.',
              ultraTrail: 'Payment and ticket module for a mountain race app.'
            }
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
            aboutMe: 'Sobre Mí',
            degree: 'Técnico Superior Universitario en Tecnologías de la Información área Desarrollo de Software Multiplataforma'
          },
          about: {
            title: 'Sobre mí',
            academicFormation: 'Formación Académica',
            degree1: 'Ingeniería en Desarrollo y Gestión de Software',
            degree1Status: 'En curso',
            degree2: 'TSU en Tecnologías de la Información',
            degree2Area: 'Área Desarrollo de Software Multiplataforma',
            degree2Status: 'Completado',
            professionalProfile: 'Perfil Profesional',
            introduction: 'Hola, soy {{name}}, pero puedes llamarme Neft o Nefta. Mi primer contacto con la tecnología fue a los 18 años, cuando empecé a aprender sobre reparación de PCs, instalación de sistemas operativos y creación de blogs. Aunque estudié Mantenimiento Industrial, decidí cambiar de rumbo hacia la programación, un área que me apasiona.',
            studies: 'Recientemente terminé el {{degree}} y ahora estoy cursando la {{currentDegree}}.',
            skillsIntro: 'Durante mis estudios y experiencia profesional, he desarrollado habilidades en:',
            skills: [
              'Bases de datos: PostgreSQL, MySQL, MongoDB',
              'Desarrollo web: HTML, CSS, JavaScript, React',
              'Backend: Node.js (Express), PHP (Slim, Laravel)',
              'Desarrollo móvil: React Native, Android Studio',
              'Control de versiones: Git & GitHub',
              'Metodologías ágiles: SCRUM'
            ],
            closing: 'Como Desarrollador Full Stack Jr., me mantengo constantemente actualizado con las últimas tendencias en desarrollo de software y disfruto creando soluciones tecnológicas innovadoras que resuelvan problemas reales.'
          },
          skills: {
            title: 'Tecnologías',
            description: 'Durante mi viaje en este mundo del desarrollo de software, he cultivado experiencia y habilidades en una variedad de tecnologías, algunas por gusto y otras por necesidad para proyectos.',
            frontend: {
              title: 'Frontend',
              html: 'HTML',
              css: 'CSS',
              javascript: 'JavaScript',
              reactNative: 'React Native',
              reactJS: 'ReactJS',
              astro: 'Astro',
              tailwindCSS: 'TailwindCSS',
              bootstrap: 'Bootstrap',
              vue: 'Vue.js'
            },
            backend: {
              title: 'Backend',
              slimPHP: 'Slim PHP',
              express: 'Express',
              laravel: 'Laravel',
              mySQL: 'MySQL',
              mongoDB: 'MongoDB',
              nodeJS: 'Node.js',
              spring: 'Spring',
              fastAPI: 'FastAPI',
              postgreSQL: 'PostgreSQL'
            },
            tools: {
              title: 'Herramientas',
              git: 'Git',
              gitHub: 'GitHub',
              npm: 'NPM',
              ubuntu: 'Ubuntu',
              postman: 'Postman',
              yarn: 'Yarn',
              expo: 'Expo',
              vsCode: 'VS Code',
              androidStudio: 'Android Studio'
            }
          },
          experience: {
            title: 'Experiencia Laboral',
            description: 'Mi trayectoria profesional en el desarrollo de software, donde cada proyecto ha contribuido a mi crecimiento como desarrollador.',
            items: [
              {
                period: 'Abril 2025 - Presente',
                title: 'Desarrollador Web Frontend',
                company: 'Espora',
                project: 'Plataformas Web Empresariales y politicas',
                description: 'Diseño y desarrollo de plataformas webs empresariales con React, Next.js y Vite',
                direction: 'left'

              },
              {
                period: 'Enero 2025 - Julio 2025',
                title: 'Desarrollador Fullstack Jr.',
                company: 'Grupo Comercial Bracarda',
                project: 'Sitio web de servicios turísticos Adventy Travels',
                description: 'Desarrollo y mantenimiento de plataforma web turística con React y Vite',
                direction: 'right'
              },
              {
                period: 'Septiembre 2024 - Abril 2025',
                title: 'Desarrollador Móvil Frontend',
                company: 'XicoNemi by DreamTeam',
                project: 'App XicoNemi',
                description: 'Desarrollo de aplicación móvil turística con React Native y Expo',
                direction: 'left'
              },
              {
                period: 'Abril 2024 - Agosto 2024',
                title: 'Desarrollador Fullstack Jr.',
                company: 'Startdust S.A DE C.V',
                project: 'App Ultra Trail',
                description: 'Implementación de sistema de pagos y gestión de boletos',
                direction: 'right'
              }
            ]
          },
          projects: {
            title: 'Proyectos Destacados',
            viewCode: 'Ver Código',
            viewDemo: 'Ver Demo',
            descriptions: {
              portfolio: 'Portafolio con Next.js, TypeScript y Tailwind. Totalmente responsivo con modo claro y oscuro.',
              ultraTrail: 'Módulo de pagos y boletos para app de carreras de montaña.'
            }
          }
        }
      }
    },
    fallbackLng: 'en', // Asegúrate de que coincida con el idioma predeterminado
    lng: 'en', // Idioma inicial
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true, // Habilita Suspense para manejar la carga de traducciones
    },
  });

export default i18n;
