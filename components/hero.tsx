"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/30 dark:from-primary/5 dark:to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Aditya Kwatra</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">Software Developer</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Experienced in JavaScript, React, Next.js, TypeScript, and Redux, with a strong focus on performance
            optimization and scalable architecture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const projectsSection = document.getElementById("projects")
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Projects
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

export default Hero
