"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Sobre mí
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative w-56 h-56 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]">
                <Image
                  src="https://raw.githubusercontent.com/Nefta11/my-portfolio/refs/heads/main/public/images/Siuu.png"
                  alt="Foto de Neft"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative p-[2px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient"></div>
                <Card className="relative bg-background">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-3">Formación Académica</h3>
                    <ul className="space-y-3">
                      <li>
                        <p className="font-medium text-sm">Ingeniería en Desarrollo y Gestión de Software</p>
                        <p className="text-sm text-muted-foreground">En curso</p>
                      </li>
                      <li>
                        <p className="font-medium text-sm">TSU en Tecnologías de la Información</p>
                        <p className="text-sm text-muted-foreground">Área Desarrollo de Software Multiplataforma</p>
                        <p className="text-sm text-muted-foreground">Completado</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="relative p-[2px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient"></div>
                <Card className="relative bg-background">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-3">Perfil Profesional</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Hola, soy <span className="font-semibold text-foreground">Neftalí Arturo Hernández Vergara</span>, pero puedes llamarme Neft o Nefta. Mi primer contacto con la tecnología fue a los 18 años, cuando empecé a aprender sobre reparación de PCs, instalación de sistemas operativos y creación de blogs. Aunque estudié Mantenimiento Industrial, decidí cambiar de rumbo hacia la programación, un área que me apasiona.
                      </p>
                      <p>
                        Recientemente terminé el <span className="font-semibold text-foreground">Técnico Superior Universitario en Tecnologías de la Información, área Desarrollo de Software Multiplataforma</span> y ahora estoy cursando la Ingeniería en Desarrollo y Gestión de Software.
                      </p>
                      <p>
                        Durante mis estudios y experiencia profesional, he desarrollado habilidades en:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5">
                        <li>Bases de datos: PostgreSQL, MySQL, MongoDB</li>
                        <li>Desarrollo web: HTML, CSS, JavaScript, React</li>
                        <li>Backend: Node.js (Express), PHP (Slim, Laravel)</li>
                        <li>Desarrollo móvil: React Native, Android Studio</li>
                        <li>Control de versiones: Git & GitHub</li>
                        <li>Metodologías ágiles: SCRUM</li>
                      </ul>
                      <p>
                        Como Desarrollador Full Stack Jr., me mantengo constantemente actualizado con las últimas tendencias en desarrollo de software y disfruto creando soluciones tecnológicas innovadoras que resuelvan problemas reales.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}