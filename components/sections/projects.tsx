"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { title } from 'node:process'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog'
import { useState } from 'react'

export function Projects() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Adventy Travels",
      description: `Plataforma web para servicios turísticos con soporte multilingüe y diseño responsivo.\n\nCaracterísticas principales:\n- Panel de administración para agencias y usuarios.\n- Integración de pagos y reservas.\n- Soporte para múltiples idiomas y monedas.\n- Despliegue en Vercel y optimización SEO.\n\nRol: Fullstack Developer (React, Vite, Node.js, Vercel)`,
      github: "https://github.com/Nefta11/GoodTravel-web",
      demo: "https://adventytravels.com/",
      image: "https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/assets/AdventyTravels.png",
      tech: [
        { name: "HTML", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg", color: "bg-[#E34F26]/10 text-[#E34F26]" },
        { name: "CSS", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg", color: "bg-[#1572B6]/10 text-[#1572B6]" },
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg", color: "bg-[#F7DF1E]/10 text-[#F7DF1E]" },
        { name: "React", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg", color: "bg-[#61DAFB]/10 text-[#61DAFB]" },
        { name: "Vite", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vite-Dark.svg", color: "bg-[#646CFF]/10 text-[#646CFF]" },
        { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" },
        { name: "NPM", icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg", color: "bg-[#CB3837]/10 text-[#CB3837]" },
        { name: "Vercel", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vercel-Dark.svg", color: "bg-[#000000]/10 text-[#000000] dark:text-[#FFFFFF]" }
      ]
    },
    {
      title: "Wallet Mate App",
      description: `Aplicación móvil para la gestión de gastos y presupuestos personales.\n\nCaracterísticas principales:\n- Registro y categorización de gastos e ingresos.\n- Exportación de datos a Excel.\n- Modo oscuro/claro.\n- Sección de educación financiera interactiva.\n- Notificaciones y recordatorios.\n\nRol: Mobile Developer (React Native, Expo, Node.js)`,
      github: "https://github.com/Nefta11/WalletMate",
      demo: "https://appetize.io/app/b_x5x7kxiy3did5ueirvmhtga7qy",
      image: "https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/assets/walletmate.png",
      tech: [
        { name: "React Native", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg", color: "bg-[#61DAFB]/10 text-[#61DAFB]" },
        { name: "Node.js", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg", color: "bg-[#339933]/10 text-[#339933]" },
        { name: "Expo", icon: "https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png", color: "bg-[#000020]/10 text-[#000020] dark:text-[#FFFFFF]" },
        { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" },
        { name: "NPM", icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg", color: "bg-[#CB3837]/10 text-[#CB3837]" },
        { name: "TypeScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg", color: "bg-[#3178C6]/10 text-[#3178C6]" },
      ]
    }
    ,
    {
      title: "Mi Portafolio Web 2 Mejorado",
      description: `${t('projects.descriptions.portfolio')}\n\nCaracterísticas principales:\n- Diseño moderno y responsivo.\n- Modo claro/oscuro.\n- Animaciones con Framer Motion.\n- Sección de proyectos interactiva con modales.\n- Despliegue en Netlify.\n\nRol: Frontend Developer (Next.js, TypeScript, TailwindCSS)`,
      github: "https://github.com/Nefta11/MiPortafolioNefta",
      demo: "https://neftalivergaraportafolio.netlify.app/",
      image: "https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/assets/myprofile2.png",
      tech: [
        { name: "TypeScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg", color: "bg-[#3178C6]/10 text-[#3178C6]" },
        { name: "TailwindCSS", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg", color: "bg-[#38B2AC]/10 text-[#38B2AC]" },
        { name: "Next.js", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg", color: "bg-[#000000]/10 text-[#000000] dark:text-[#FFFFFF]" },
        { name: "CSS", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg", color: "bg-[#1572B6]/10 text-[#1572B6]" },
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg", color: "bg-[#F7DF1E]/10 text-[#F7DF1E]" },
        { name: "NPM", icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg", color: "bg-[#CB3837]/10 text-[#CB3837]" },
        { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" }
      ]
    },
    {
      title: "XicoNemi",
      description: `App móvil para turismo en Xicotepec con itinerarios y rutas personalizadas.\n\nCaracterísticas principales:\n- Generación de rutas turísticas personalizadas.\n- Mapa interactivo y geolocalización.\n- Panel de administración para negocios locales.\n- Integración con bases de datos y notificaciones push.\n\nRol: Mobile Developer (React Native, Redux, Node.js, Expo)`,
      github: "https://github.com/XicoNemi/mobile-app",
      demo: "https://appetize.io/app/b_5zzebzaui7cj4lldpew5hw2i2i",
      image: "https://raw.githubusercontent.com/Nefta11/MiPortafolioNefta/refs/heads/main/assets/XicoNemi.png",
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
      description: `${t('projects.descriptions.ultraTrail')}\n\nCaracterísticas principales:\n- Módulo de pagos con Stripe.\n- Generación y validación de boletos digitales.\n- Panel de administración para organizadores.\n- Integración con backend en Node.js y PHP.\n\nRol: Fullstack Developer (React Native, Node.js, PHP, Stripe)`,
      github: "https://github.com/UltraHuauchi",
      image: "https://raw.githubusercontent.com/Nefta11/my-portfolio/main/public/images/projects/UltraTrailBoletos.png",
      tech: [
        { name: "React Native", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg", color: "bg-[#61DAFB]/10 text-[#61DAFB]" },
        { name: "Node.js", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg", color: "bg-[#339933]/10 text-[#339933]" },
        { name: "MySQL", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg", color: "bg-[#4479A1]/10 text-[#4479A1]" },
        { name: "Stripe", icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg", color: "bg-[#008CDD]/10 text-[#008CDD]" },
        { name: "Expo", icon: "https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png", color: "bg-[#000020]/10 text-[#000020] dark:text-[#FFFFFF]" },
        { name: "Postman", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg", color: "bg-[#FF6C37]/10 text-[#FF6C37]" },
        { name: "PHP", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg", color: "bg-[#777BB4]/10 text-[#777BB4]" },
        { name: "Yarn", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Yarn-Dark.svg", color: "bg-[#2C8EBB]/10 text-[#2C8EBB]" },
        { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" }
      ]
    },
    {
      title: "My Portafolio",
      description: `Página estática con Astro y Tailwind, desplegada en Netlify.\n\nCaracterísticas principales:\n- Diseño minimalista y rápido.\n- Sección de proyectos y contacto.\n- Despliegue automático con GitHub Actions.\n\nRol: Frontend Developer (Astro, TailwindCSS, JavaScript)`,
      github: "https://github.com/Nefta11/my-portfolio",
      demo: "https://neftaliportafoliodev.netlify.app/",
      image: "https://raw.githubusercontent.com/Nefta11/my-portfolio/refs/heads/main/public/images/projects/PortafolioSiuu.png",
      tech: [
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg", color: "bg-[#F7DF1E]/10 text-[#F7DF1E]" },
        { name: "Astro", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Astro.svg", color: "bg-[#FF5D01]/10 text-[#FF5D01]" },
        { name: "Tailwind", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg", color: "bg-[#38B2AC]/10 text-[#38B2AC]" },
        { name: "NPM", icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg", color: "bg-[#CB3837]/10 text-[#CB3837]" },
        { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg", color: "bg-[#F05032]/10 text-[#F05032]" }
      ]
    },
    {
      title: "Gran Bazar",
      description: `App web para compras con PHP, HTML, CSS, JS y MySQL.\n\nCaracterísticas principales:\n- Carrito de compras y gestión de productos.\n- Panel de administración para ventas y stock.\n- Autenticación de usuarios y roles.\n- Reportes de ventas y exportación de datos.\n\nRol: Fullstack Developer (PHP, MySQL, JavaScript, HTML, CSS)`,
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
            {t('projects.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Dialog key={index} open={openIndex === index} onOpenChange={(open) => setOpenIndex(open ? index : null)}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="relative p-[2px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient"></div>
                      <Card className="relative overflow-hidden h-full flex flex-col bg-background">
                        <div className="relative h-48 w-full overflow-hidden group rounded-md border border-border">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                              <a href={project.github} target="_blank" rel="noopener noreferrer" title={t('projects.viewCode')}>
                                <Github className="h-5 w-5" />
                              </a>
                            </Button>
                            {project.demo && (
                              <Button variant="outline" size="icon" asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" title={t('projects.viewDemo')}>
                                  <ExternalLink className="h-5 w-5" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="w-full max-w-2xl sm:max-w-2xl p-2 sm:p-6 rounded-lg overflow-y-auto max-h-[90vh] sm:max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-center">
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  <DialogDescription asChild>
                    <div className="mb-4 flex flex-col items-center">
                      <div className="w-full flex justify-center">
                        <Image src={project.image} alt={project.title} width={600} height={300} className="rounded-lg shadow-lg mx-auto mb-4 object-cover w-full max-w-xs sm:max-w-lg h-40 sm:h-64" />
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-2 text-center whitespace-pre-line">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-2 rounded-full ${tech.color} border border-border/50 shadow-sm`}
                          >
                            <img src={tech.icon} alt={tech.name} className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm font-semibold">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4 w-full">
                        <Button variant="outline" asChild className="w-full sm:w-auto">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" title={t('projects.viewCode')}>
                            <Github className="h-5 w-5 mr-2" /> {t('projects.viewCode')}
                          </a>
                        </Button>
                        {project.demo && (
                          <Button variant="outline" asChild className="w-full sm:w-auto">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" title={t('projects.viewDemo')}>
                              <ExternalLink className="h-5 w-5 mr-2" /> {t('projects.viewDemo')}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="secondary" className="w-full mt-2">Cerrar</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
