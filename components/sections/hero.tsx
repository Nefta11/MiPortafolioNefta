"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/5 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                opacity: Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-xl bg-primary/10 text-primary px-4 py-2 rounded-full font-bold">
                  {t('hero.greeting')}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  Neftalí Arturo
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                  {t('hero.role')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Técnico Superior Universitario en Tecnologías de la Información área Desarrollo de Software Multiplataforma
                </p>
                <p className="text-lg text-muted-foreground max-w-lg">
                  {t('hero.description')}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild size="lg" className="group text-lg px-6 py-6">
                  <a href="#projects" className="flex items-center gap-2">
                    <span>{t('hero.viewProjects')}</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" size="lg" asChild className="text-lg px-6 py-6">
                  <a href="#about">{t('hero.aboutMe')}</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Button 
                  variant="outline" 
                  size="icon" 
                  asChild 
                  className="rounded-full w-14 h-14 hover:bg-[#181717]/10 hover:text-[#181717] dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <a href="https://github.com/Nefta11" target="_blank" rel="noopener noreferrer">
                    <Github className="h-8 w-8 text-[#181717] dark:text-white" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Button 
                  variant="outline" 
                  size="icon" 
                  asChild 
                  className="rounded-full w-14 h-14 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
                >
                  <a href="https://www.linkedin.com/in/neftali-arturo-hern%C3%A1ndez-vergara-9996a8229/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-8 w-8 text-[#0A66C2]" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Button 
                  variant="outline" 
                  size="icon" 
                  asChild 
                  className="rounded-full w-14 h-14 hover:bg-[#EA4335]/10 hover:text-[#EA4335]"
                >
                  <a href="mailto:neftaliarturoherandez@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#EA4335]"
                    >
                      <path d="M22 3H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 5l10 7 10-7v14H2V5z"/>
                    </svg>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Animated code editor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="bg-background/80 backdrop-blur-sm rounded-lg border shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm text-muted-foreground">portfolio.tsx</div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="p-4 font-mono text-sm"
              >
                <TypewriterText text={`const Desarrollador = {
  nombre: "Neftalí Arturo",
  rol: "Desarrollador Full Stack Jr.",
  ubicación: "Zihuateutla y Xicotepec, Puebla, México",
  tecnologías: [
    "React", "React Native",
    "MySQL", "Express",
    "JavaScript", "HTML", "CSS",
    "Git", "Python"
  ],
  pasión: "Transformar ideas en soluciones tecnológicas"
}`} />
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 dark:bg-purple-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [text])

  return (
    <pre className="text-primary">
      <code className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
        {displayText}
      </code>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block w-2 h-4 bg-purple-500 dark:bg-purple-400 ml-1"
      />
    </pre>
  )
}