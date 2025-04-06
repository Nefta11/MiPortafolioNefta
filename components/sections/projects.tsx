"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Adventy Travels",
    description: "Desarrollé una plataforma web orientada a la promoción y comercialización de servicios turísticos. Utilicé React junto con Vite como herramienta de bundling, siguiendo una arquitectura modular centrada en funcionalidades para optimizar la escalabilidad y el mantenimiento a largo plazo. Implementé EmailJS para la gestión de correos electrónicos, permitiendo que los asesores de ventas se comuniquen de manera eficiente con los usuarios interesados en solicitar cotizaciones personalizadas. El sitio es multilingüe, soportando español, inglés y francés, gracias a la integración de i18next para la internacionalización. Además, se incorporaron bibliotecas como React Icons y SweetAlert para mejorar la interfaz y la experiencia del usuario. El diseño es completamente responsivo, adaptándose de manera fluida a una variedad de dispositivos móviles y plataformas. También se establece una conexión con una tienda en línea para la adquisición de paquetes turísticos.",
    github: "https://github.com/Nefta11/GoodTravel-web",
    demo: "https://adventytravels.com/",
    image: "https://raw.githubusercontent.com/Nefta11/my-portfolio/refs/heads/main/public/images/projects/adventy1.png",
    tech: [
      { name: "HTML", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg", color: "bg-[#E34F26]/10 text-[#E34F26]" },
      { name: "CSS", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg", color: "bg-[#1572B6]/10 text-[#1572B6]" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg", color: "bg-[#F7DF1E]/10 text-[#F7DF1E]" },
      { name: "React", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg", color: "bg-[#61DAFB]/10 text-[#61DAFB]" },
      { name: "Vite", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vite-Dark.svg", color: "bg-[#646CFF]/10 text-[#646CFF]" },
      { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" },
      { name: "NPM", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NPM-Light.svg", color: "bg-[#CB3837]/10 text-[#CB3837]" },
      { name: "Vercel", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vercel-Dark.svg", color: "bg-[#000000]/10 text-[#000000] dark:text-[#FFFFFF]" }
    ]
  },
  {
    title: "XicoNemi",
    description: "Como parte del proyecto XicoNemi, mi responsabilidad fue desarrollar la aplicación móvil utilizando React Native y ejecutada en Expo. La app está diseñada para promover el turismo en Xicotepec, ofreciendo itinerarios personalizados, rutas de senderismo y ciclismo, además de destacar actividades de ecoturismo. Implementé Redux para la gestión del estado global y React Navigation para la navegación entre pantallas, siguiendo una estructura modular basada en funcionalidades y dominios para garantizar escalabilidad y fácil mantenimiento. La aplicación consume APIs desarrolladas en nuestro backend para funciones clave como registro, inicio de sesión y obtención de datos turísticos, entre otras muchas más.",
    github: "https://github.com/XicoNemi/mobile-app/tree/dev",
    demo: "https://appetize.io/app/b_5f55tlbgu24j5n25i5fpfgbrcm?device=pixel7&osVersion=13.0",
    image: "https://raw.githubusercontent.com/Nefta11/my-portfolio/refs/heads/main/public/images/projects/XicoNemi1.png",
    tech: [
      { name: "React Native", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg", color: "bg-[#61DAFB]/10 text-[#61DAFB]" },
      { name: "Node.js", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg", color: "bg-[#339933]/10 text-[#339933]" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg", color: "bg-[#4479A1]/10 text-[#4479A1]" },
      { name: "Redux", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Redux.svg", color: "bg-[#764ABC]/10 text-[#764ABC]" },
      { name: "Expo", icon: "https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png", color: "bg-[#000020]/10 text-[#000020] dark:text-[#FFFFFF]" },
      { name: "Postman", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg", color: "bg-[#FF6C37]/10 text-[#FF6C37]" },
      { name: "Yarn", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Yarn-Dark.svg", color: "bg-[#2C8EBB]/10 text-[#2C8EBB]" },
      { name: "Prisma", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Prisma.svg", color: "bg-[#2D3748]/10 text-[#2D3748]" },
      { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" }
    ]
  },
  {
    title: "Ultra Trail",
    description: "Desarrollo del módulo de métodos de pago y compra de boletos para la aplicación Ultra Trail, enfocada en carreras de montaña. Maqueté y desarrollé interfaces en React Native ejecutadas en Expo, creando pantallas para métodos de pago, compra de boletos, carrito de compras y visualización de boletos. Stripe fue implementado para la gestión segura de pagos. Node.js se utilizó para la configuración del entorno y ejecución del código JavaScript en React. Desarrollé y consumí APIs con Slim PHP para manejar transacciones y la gestión de boletos, utilizando MySQL para el almacenamiento de datos.",
    github: "https://github.com/UltraHuauchi",
    image: "https://raw.githubusercontent.com/Nefta11/my-portfolio/main/public/images/projects/UltraTrailBoletos.png",
    tech: [
      { name: "React Native", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg", color: "bg-[#61DAFB]/10 text-[#61DAFB]" },
      { name: "Node.js", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg", color: "bg-[#339933]/10 text-[#339933]" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg", color: "bg-[#4479A1]/10 text-[#4479A1]" },
      { name: "Stripe", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Stripe-Light.svg", color: "bg-[#008CDD]/10 text-[#008CDD]" },
      { name: "Expo", icon: "https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png", color: "bg-[#000020]/10 text-[#000020] dark:text-[#FFFFFF]" },
      { name: "Postman", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg", color: "bg-[#FF6C37]/10 text-[#FF6C37]" },
      { name: "PHP", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg", color: "bg-[#777BB4]/10 text-[#777BB4]" },
      { name: "Yarn", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Yarn-Dark.svg", color: "bg-[#2C8EBB]/10 text-[#2C8EBB]" },
      { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" }
    ]
  },
  {
    title: "My Portafolio",
    description: "Desarrollé una página web estática utilizando Astro 4.0, basándome en un breve curso impartido por un desarrollador conocido. Para el diseño, empleé Tailwind CSS y un poco de JavaScript para algunas funcionalidades adicionales. Las capturas de pantalla fueron tomadas con la plataforma Shots y los iconos fueron extraídos de SVGL.app. El sitio web se desplegó en Netfly y es completamente responsivo.",
    github: "https://github.com/Nefta11/my-portfolio",
    demo: "https://neftaliportafolio.vercel.app/",
    image: "https://raw.githubusercontent.com/Nefta11/my-portfolio/refs/heads/main/public/images/projects/PortafolioSiuu.png",
    tech: [
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg", color: "bg-[#F7DF1E]/10 text-[#F7DF1E]" },
      { name: "Astro", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Astro.svg", color: "bg-[#FF5D01]/10 text-[#FF5D01]" },
      { name: "Tailwind", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg", color: "bg-[#38B2AC]/10 text-[#38B2AC]" },
      { name: "NPM", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NPM-Light.svg", color: "bg-[#CB3837]/10 text-[#CB3837]" },
      { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" }
    ]
  },
  {
    title: "MusicForYou",
    description: "Desarrollo de una aplicación móvil llamada MusicForYou enfocada en la creación y gestión de contenido musical. Utilicé React Native para desarrollar la interfaz y Slim PHP para crear una API que gestiona las operaciones del backend. Los usuarios pueden registrarse y autenticarse, lo que les permite crear y gestionar sus propias canciones, letras, artistas y géneros musicales. La aplicación ofrece una experiencia intuitiva con navegación sencilla, facilitando la gestión musical personalizada.",
    github: "https://github.com/Nefta11/AppMusicForYou",
    image: "https://raw.githubusercontent.com/Nefta11/my-portfolio/main/public/images/projects/MusicForYou.png",
    tech: [
      { name: "Node.js", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg", color: "bg-[#339933]/10 text-[#339933]" },
      { name: "React Native", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg", color: "bg-[#61DAFB]/10 text-[#61DAFB]" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg", color: "bg-[#4479A1]/10 text-[#4479A1]" },
      { name: "PHP", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg", color: "bg-[#777BB4]/10 text-[#777BB4]" },
      { name: "Postman", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg", color: "bg-[#FF6C37]/10 text-[#FF6C37]" },
      { name: "Yarn", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Yarn-Dark.svg", color: "bg-[#2C8EBB]/10 text-[#2C8EBB]" }
    ]
  },
  {
    title: "Gran Bazar",
    description: "Desarrollé esta aplicación web como parte de un proyecto integrador universitario, utilizando tecnologías como PHP, HTML, CSS, JavaScript y MySQL para el desarrollo tanto del frontend como del backend, sin el uso de frameworks. Además, diseñé y configuré la base de datos, incorporando procedimientos almacenados, funciones y vistas para la simulación y gestión de los datos. La aplicación incluye funcionalidades clave como el registro y acceso de usuarios, un carrito de compras para la visualización de productos seleccionados, y la opción de cerrar sesión de manera segura",
    github: "https://github.com/Nefta11/Gran_Bazar",
    image: "https://raw.githubusercontent.com/Nefta11/my-portfolio/main/public/images/projects/GranBazar.png",
    tech: [
      { name: "PHP", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg", color: "bg-[#777BB4]/10 text-[#777BB4]" },
      { name: "HTML", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg", color: "bg-[#E34F26]/10 text-[#E34F26]" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg", color: "bg-[#F7DF1E]/10 text-[#F7DF1E]" },
      { name: "CSS", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg", color: "bg-[#1572B6]/10 text-[#1572B6]" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg", color: "bg-[#4479A1]/10 text-[#4479A1]" }
    ]
  }
]

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Proyectos Destacados
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-[2px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient"></div>
                  <Card className="relative overflow-hidden h-full flex flex-col bg-background">
                    <div className="relative h-48 overflow-hidden group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full ${tech.color} border border-border/50 transition-colors duration-300 hover:border-border`}
                          >
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-4 h-4"
                            />
                            <span className="text-xs font-medium">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="flex gap-4">
                        <Button variant="outline" size="icon" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" title="Ver código">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                        {project.demo && (
                          <Button variant="outline" size="icon" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Ver demo">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}