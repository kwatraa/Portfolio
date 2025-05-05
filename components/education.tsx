"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const Education = () => {
  const education = [
    {
      institution: "Oregon State University",
      location: "Corvallis, Oregon",
      degree: "Masters of Engineering in Computer Science",
      period: "Sep 2023 – Dec 2025",
      courses: ["Error Correcting Codes", "Operating Systems", "Computer Graphics", "Human-Computer Interaction"],
    },
    {
      institution: "SRM University",
      location: "Sonepat, Haryana",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "Aug 2018 – June 2022",
      courses: ["Data Structures", "Algorithm", "Cloud Application Development", "OOPs", "Computer Networks"],
    },
  ]

  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <Badge variant="outline" className="mt-1 sm:mt-0 w-fit">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-lg font-medium mb-1">{edu.degree}</p>
                    <p className="text-muted-foreground mb-3">{edu.location}</p>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education
