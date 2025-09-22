"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Lars Andersen",
    location: "Stavanger",
    rating: 5,
    content: "Fantastisk service fra start til slutt! Fikk levert Tesla Model 3 på døra hjemme i Stavanger. Alt gikk knirkefritt, og bilen var nøyaktig som beskrevet.",
    vehicle: "Tesla Model 3"
  },
  {
    id: 2,
    name: "Maria Hansen",
    location: "Bergen",
    rating: 5,
    content: "Kjøpte BMW iX3 og er utrolig fornøyd. Teamet på Elbilhallen var profesjonelle og hjalp meg med alt fra finansiering til forsikring. Anbefaler på det sterkeste!",
    vehicle: "BMW iX3"
  },
  {
    id: 3,
    name: "Erik Johannessen",
    location: "Oslo",
    rating: 5,
    content: "Byttet inn min gamle bil og kjøpte Volkswagen ID.4. Prosessen var utrolig enkel, og jeg fikk en rettferdig pris for innbyttet. Topp service!",
    vehicle: "Volkswagen ID.4"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hva våre kunder sier
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les om opplevelsene til våre fornøyde kunder som har kjøpt elbil
            gjennom Elbilhallen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Kjøpte</p>
                        <p className="text-sm font-medium text-primary">
                          {testimonial.vehicle}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}