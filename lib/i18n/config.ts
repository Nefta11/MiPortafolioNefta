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
          developer: {
            name: 'Neftalí Arturo',
            role: 'Junior Full Stack Developer',
            location: 'Zihuateutla and Xicotepec, Puebla, Mexico',
            technologies: [
              'React', 'React Native',
              'MySQL', 'Express',
              'JavaScript', 'HTML', 'CSS',
              'Git', 'Python'
            ],
            passion: 'Transforming ideas into technological solutions'
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
          developer: {
            name: 'Neftalí Arturo',
            role: 'Desarrollador Full Stack Jr.',
            location: 'Zihuateutla y Xicotepec, Puebla, México',
            technologies: [
              'React', 'React Native',
              'MySQL', 'Express',
              'JavaScript', 'HTML', 'CSS',
              'Git', 'Python'
            ],
            passion: 'Transformar ideas en soluciones tecnológicas'
          }
        }
      }
    },
    fallbackLng: 'es', // Asegúrate de que el idioma predeterminado esté configurado
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Desactiva el suspense para evitar problemas de hidratación
    },
  });

export default i18n;
