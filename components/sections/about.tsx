"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation();

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
            {t('about.title')}
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
                    <h3 className="text-lg font-semibold mb-3">{t('about.academicFormation')}</h3>
                    <ul className="space-y-3">
                      <li>
                        <p className="font-medium text-sm">{t('about.degree1')}</p>
                        <p className="text-sm text-muted-foreground">{t('about.degree1Status')}</p>
                      </li>
                      <li>
                        <p className="font-medium text-sm">{t('about.degree2')}</p>
                        <p className="text-sm text-muted-foreground">{t('about.degree2Area')}</p>
                        <p className="text-sm text-muted-foreground">{t('about.degree2Status')}</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="relative p-[2px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient"></div>
                <Card className="relative bg-background">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-3">{t('about.professionalProfile')}</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>{t('about.introduction', { name: 'Neftalí Arturo Hernández Vergara' })}</p>
                      <p>{t('about.studies', { degree: t('about.degree2'), currentDegree: t('about.degree1') })}</p>
                      <p>{t('about.skillsIntro')}</p>
                      <ul className="list-disc list-inside space-y-1.5">
                        {(t('about.skills', { returnObjects: true }) as string[]).map((skill: string, index: number) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                      <p>{t('about.closing')}</p>
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
