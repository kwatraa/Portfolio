"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bash", "Python"],
    },
    {
      title: "Frameworks",
      skills: ["React JS", "Vue JS", "Node JS", "Next JS", "jQuery", "GraphQL", "Bootstrap5", "Angular JS", "AWS"],
    },
    {
      title: "Platforms & Tools",
      skills: [
        "NPM",
        "REST API",
        "Figma",
        "JIRA",
        "Linux",
        "GitHub",
        "CI/CD",
        "Unix/Linux Environment",
        "Data Visualization",
        "UI/UX Design",
      ],
    },
    {
      title: "Soft Skills",
      skills: ["Teamwork", "Project Management", "Communication Skills", "Leadership"],
    },
  ]

  return (
    <section id="skills" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="section-subtitle">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
