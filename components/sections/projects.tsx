"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: "Mi Portafolio Web 2 Mejorado",
      description: t('projects.descriptions.portfolio'),
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
      title: "Adventy Travels",
      description: "Plataforma web para servicios turísticos con soporte multilingüe y diseño responsivo.",
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
        { name: "NPM", icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg", color: "bg-[#CB3837]/10 text-[#CB3837]" },
        { name: "Vercel", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vercel-Dark.svg", color: "bg-[#000000]/10 text-[#000000] dark:text-[#FFFFFF]" }
      ]
    },
    {
      title: "XicoNemi",
      description: "App móvil para turismo en Xicotepec con itinerarios y rutas personalizadas.",
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
      description: t('projects.descriptions.ultraTrail'),
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
      description: "Página estática con Astro y Tailwind, desplegada en Netlify.",
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
      title: "MusicForYou",
      description: "App móvil para gestionar contenido musical con React Native y Slim PHP.",
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
      description: "App web para compras con PHP, HTML, CSS, JS y MySQL.",
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
