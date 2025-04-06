"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Building2, Briefcase, ArrowRight } from 'lucide-react'

const experiences = [
  {
    period: "Enero 2025-actualidad",
    title: "Desarrollador Frontend Web",
    company: "Grupo Comercial Bracarda",
    project: "Sitio web de servicios turísticos Adventy Travel",
    description: "Desarrollo y mantenimiento de plataforma web turística con React y Vite",
    direction: "right"
  },
  {
    period: "Septiembre 2024-actualidad",
    title: "Desarrollador Móvil Frontend",
    company: "XicoNemi by DreamTeam",
    project: "App XicoNemi",
    description: "Desarrollo de aplicación móvil turística con React Native y Expo",
    direction: "left"
  },
  {
    period: "Abril 2024-Agosto 2024",
    title: "Desarrollador Fullstack Jr.",
    company: "Startdust S.A DE C.V",
    project: "App Ultra Trail",
    description: "Implementación de sistema de pagos y gestión de boletos",
    direction: "right"
  },
  {
    period: "Octubre 2023-Noviembre 2023",
    title: "Desarrollador",
    company: "Universidad Tecnológica de Xicotepec de Juárez",
    project: "Api-ti & Api-IOT",
    description: "Desarrollo de APIs para proyectos de IoT y gestión de datos",
    direction: "left"
  },
  {
    period: "Mayo 2023-Agosto 2023",
    title: "Desarrollador",
    company: "Universidad Tecnológica de Xicotepec de Juárez",
    project: "Gran_Bazar (E-commerce)",
    description: "Desarrollo de plataforma e-commerce con PHP y MySQL",
    direction: "right"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: (direction: string) => ({ 
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
    scale: 0.95
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Experiencia Laboral
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mi trayectoria profesional en el desarrollo de software, donde cada proyecto
              ha contribuido a mi crecimiento como desarrollador.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line - visible on all screen sizes */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 -translate-x-1/2" />

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  custom={exp.direction}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`relative transform-gpu md:w-[calc(50%-2rem)] ${
                    exp.direction === 'left' ? 'ml-12 md:ml-0 md:mr-auto' : 'ml-12 md:ml-auto'
                  }`}
                >
                  {/* Timeline diagonal connector */}
                  <div 
                    className={`absolute top-1/2 h-px bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                      ${exp.direction === 'left' 
                        ? 'left-[-1rem] w-4 md:left-auto md:right-0 md:w-16 md:origin-right md:rotate-[-30deg] md:translate-x-[3.75rem]' 
                        : 'left-[-1rem] w-4 md:w-16 md:origin-left md:rotate-[30deg] md:-translate-x-[3.75rem]'
                      }`}
                    style={{
                      transformOrigin: exp.direction === 'left' ? 'right center' : 'left center'
                    }}
                  />
                  
                  {/* Timeline dot */}
                  <div 
                    className={`absolute top-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                      ${exp.direction === 'left' 
                        ? 'left-[-1.5rem] md:left-auto md:right-0 md:translate-x-[4rem]' 
                        : 'left-[-1.5rem] md:-translate-x-[4rem]'
                      } -translate-y-1/2`}
                  />

                  <div className="relative p-[2px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient"></div>
                    <Card className="relative overflow-hidden bg-background">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col gap-3">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs md:text-sm">
                              <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              <span className="text-muted-foreground">{exp.period}</span>
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                              {exp.title}
                            </h3>
                            
                            {exp.company && (
                              <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                                <span className="text-sm text-muted-foreground">{exp.company}</span>
                              </div>
                            )}
                            
                            <div className="flex items-center gap-2">
                              <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              <span className="text-sm text-muted-foreground">{exp.project}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              <span className="text-xs md:text-sm text-muted-foreground">{exp.description}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

export { Experience }