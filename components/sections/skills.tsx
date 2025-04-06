"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" },
      { name: "CSS", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg" },
      { name: "React Native", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" },
      { name: "ReactJS", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg" },
      { name: "Astro", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Astro.svg" },
      { name: "TailwindCSS", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" },
      { name: "Bootstrap", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Bootstrap.svg" },
      { name: "Vue.js", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VueJS-Dark.svg" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Slim PHP", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg" },
      { name: "Express", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ExpressJS-Dark.svg" },
      { name: "Laravel", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Laravel-Dark.svg" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg" },
      { name: "Node.js", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg" },
      { name: "Sprint", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Spring-Dark.svg" },
      { name: "FastAPI", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/FastAPI.svg" },
      { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg" }
    ]
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg" },
      { name: "GitHub", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg" },
      { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "Ubuntu", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Ubuntu-Dark.svg" },
      { name: "Postman", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg" },
      { name: "Yarn", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Yarn-Dark.svg" },
      { name: "Expo", icon: "https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png" },
      { name: "VS Code", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VSCode-Dark.svg" },
      { name: "Android Studio", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/AndroidStudio-Dark.svg" }
    ]
  }
]

function InfiniteCarousel({ skills }: { skills: typeof skillCategories[0]['skills'] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return

    // Double the items for seamless loop
    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach(item => {
      const clone = item.cloneNode(true)
      scrollerRef.current?.appendChild(clone)
    })

    // Calculate animation duration based on content width
    const scrollerWidth = scrollerRef.current.scrollWidth
    const animationDuration = scrollerWidth / 100 // Increased speed by changing divisor from 50 to 100

    scrollerRef.current.style.setProperty('--animation-duration', `${animationDuration}s`)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-accent/5 py-6 md:py-8 group">
      {/* Gradient masks */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* Scroller */}
      <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]" ref={scrollerRef}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-none flex-col items-center justify-center mx-4 md:mx-8 transition-transform duration-300 hover:scale-110"
          >
            <div className="w-10 h-10 md:w-16 md:h-16 relative">
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-full h-full object-contain ${skill.name === "Expo" ? "dark:brightness-0 dark:invert" : ""}`}
              />
            </div>
            <span className="mt-2 text-xs md:text-sm text-muted-foreground whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Tecnologías
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Durante mi viaje en este mundo del desarrollo de software, he cultivado
              experiencia y habilidades en una variedad de tecnologías, algunas por gusto
              y otras por necesidad para proyectos.
            </p>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  {category.title}
                </h3>
                <InfiniteCarousel skills={category.skills} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}