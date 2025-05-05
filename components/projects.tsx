"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Utensils } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Coding Q&A Platform with DeepSeek",
      period: "Feb 2025 – Feb 2025",
      description: [
        "Designed and fine-tuned a custom LLM using Hugging Face, deployed via Ollama, enhancing search query responses for Medium and Stack Overflow with improved accuracy and relevance.",
        "Developed and launched an intuitive Streamlit UI that consolidates search results on a single page, increasing efficiency and minimizing redundant queries for a seamless user experience.",
        "Configured Nginx as a reverse proxy, streamlining deployment and boosting the performance of the Streamlit application by optimizing request handling and load balancing.",
        "Deployed the solution on AWS, leveraging Amazon SageMaker for model hosting and Amazon Route 53 for domain management, ensuring scalability, reliability, and efficient traffic routing.",
      ],
      technologies: ["Hugging Face", "Ollama", "Streamlit", "Nginx", "AWS", "SageMaker", "Route 53"],
      icon: Code2,
    },
    {
      title: "Food Image Recognition and Calorie Estimation",
      period: "Sep 2021 – May 2022",
      description: [
        "Processed a dataset of 101 food categories with 101,000 images, ensuring a well-balanced training and testing pipeline for robust model evaluation.",
        "Applied image preprocessing techniques such as resizing, normalization, and augmentation, enhancing model performance and generalization.",
        "Trained the model using CNN-based architectures with multiple epoch variations, refining feature extraction for improved classification accuracy.",
        "Applied Dropout and Batch Normalization techniques to prevent overfitting, improving model stability and generalization across diverse food images.",
      ],
      technologies: [
        "CNN",
        "Image Processing",
        "Machine Learning",
        "Python",
        "Data Augmentation",
        "Batch Normalization",
      ],
      icon: Utensils,
    },
  ]

  return (
    <section id="projects" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <Card key={index} className="border-none shadow-lg h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline">{project.period}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                    {project.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
