import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { About } from '@/components/sections/about'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
    </div>
  )
}