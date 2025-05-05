"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Bridging Gaps Management Solutions Private Limited",
      location: "Panchkula, Haryana",
      period: "Mar 2022 – Sep 2023",
      responsibilities: [
        "Designed dynamic dashboards for HR analytics using Chart.js and D3.js, implementing interactive visualizations and real-time data updates, which improved workforce data clarity and reduced HR analysis time by 30%.",
        "Worked with cross-functional teams to align front-end design with business and HR consulting needs, optimizing UI/UX for a seamless user experience and ensuring data-driven decision-making.",
        "Developed and optimized interactive web pages using React.js, implementing Redux for efficient state management, which improved component reusability and reduced load time by 30%.",
        "Debugged and optimized performance using Lighthouse and React Profiler, reducing render-blocking resources and improving page load speed for a smoother user experience.",
      ],
      skills: ["React.js", "Redux", "Chart.js", "D3.js", "UI/UX", "Performance Optimization"],
    },
    {
      title: "Front-end developer Intern",
      company: "Bridging Gaps Management Solutions Private Limited",
      location: "Panchkula, Haryana",
      period: "Dec 2021 – Mar 2022",
      responsibilities: [
        "Implemented React.js components with Redux state management to dynamically update content for service offerings, including India Entry Services and HR Consulting, ensuring real-time updates and an enhanced user experience.",
        "Optimized website performance by reducing DOM reflow, implementing lazy loading, and leveraging Bootstrap 5 (CDNs), resulting in a 20% improvement in Lighthouse scores and faster page load times.",
        "Integrated AJAX and RESTful API calls to fetch and display dynamic data, enhancing interactivity and reducing client-server response times for a seamless user experience.",
      ],
      skills: ["React.js", "Redux", "Bootstrap 5", "AJAX", "RESTful API", "Performance Optimization"],
    },
    {
      title: "React developer intern",
      company: "Evueme Technologies Private Limited",
      location: "Delhi, NCR",
      period: "May 2021 – Sep 2021",
      responsibilities: [
        "Debugged and resolved UX issues using React DevTools and Chrome DevTools, accelerating bug resolution time and improving overall user experience.",
        "Integrated RESTful APIs using Axios and Fetch, enhancing data-fetching efficiency by 35% and improving the application responsiveness.",
        "Collaborated with backend developers to define API contracts, enhancing data exchange efficiency and ensuring seamless front-end and back-end integration.",
      ],
      skills: ["React.js", "React DevTools", "Chrome DevTools", "Axios", "Fetch API", "API Integration"],
    },
    {
      title: "Summer Intern-Smart Water Management",
      company: "Dysmech Consultancy Services Private Limited",
      location: "Delhi, NCR",
      period: "Jul 2020 – Aug 2020",
      responsibilities: [],
      skills: ["Smart Water Management"],
    },
  ]

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <Badge variant="outline" className="mt-1 sm:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.company} | {exp.location}
                    </p>

                    {exp.responsibilities.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-sm md:text-base">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
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

export default Experience
