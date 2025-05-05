"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>

        <Card className="border-none shadow-lg">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-6">
              Experienced Software developer proficient in JavaScript, React, Next.js, TypeScript, and Redux, with a
              strong focus on performance optimization, state management, and scalable architecture. Skilled in building
              responsive, accessible, and high-performance web applications, integrating RESTful APIs, WebSockets, and
              GraphQL, and optimizing UI with lazy loading, SSR, and code splitting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p className="text-muted-foreground">Corvallis, Oregon</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Contact</h3>
                <p className="text-muted-foreground">Phone: +1 541-286-2502</p>
                <p className="text-muted-foreground">Email: kwatraa@oregonstate.edu</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default About
