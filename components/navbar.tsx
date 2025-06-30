"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Download, Languages } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import '../lib/i18n/config'

const navItems = [
  { href: '#home', label: 'nav.home' },
  { href: '#experience', label: 'nav.experience' },
  { href: '#projects', label: 'nav.projects' },
  { href: '#skills', label: 'nav.skills' },
  { href: '#about', label: 'nav.about' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src="https://raw.githubusercontent.com/Nefta11/my-portfolio/refs/heads/main/public/images/profile2.png"
                  alt="Neftali foto"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold">Neft</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t(item.label)}
              </Link>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="relative"
            >
              <Languages className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-xs font-bold">
                {i18n.language.toUpperCase()}
              </span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=1m4Et3Lvfw8LG7a5m-4x9dfgioYB84Sgd"
                download="CV_NeftaliArturoHernandezVergara"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>{t('nav.downloadCV')}</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="relative"
            >
              <Languages className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-xs font-bold">
                {i18n.language.toUpperCase()}
              </span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t(item.label)}
            </Link>
          ))}
          <Button asChild className="w-full mt-4">
            <a
              href="https://drive.google.com/uc?export=download&id=1m4Et3Lvfw8LG7a5m-4x9dfgioYB84Sgd"
              download="CV_NeftaliArturoHernandezVergara"
              className="flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span>{t('nav.downloadCV')}</span>
            </a>
          </Button>
        </div>
      </motion.div>
    </nav>
  )
}