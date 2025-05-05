"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "kwatraa@oregonstate.edu",
      link: "mailto:kwatraa@oregonstate.edu",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 541-286-2502",
      link: "tel:+15412862502",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Corvallis, Oregon",
      link: "https://maps.google.com/?q=Corvallis,Oregon",
    },
  ]

  return (
    <section id="contact" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contact</h2>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon

            return (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
