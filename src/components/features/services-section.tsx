"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Truck, ArrowUpDown, Shield, CreditCard, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Truck,
    title: "Frakt",
    description: "Vi kan levere bilen der du ønsker i nesten hele Norge",
    features: ["Rask levering", "Sikker transport", "Dørleveranse"],
    href: "/tjenester/frakt"
  },
  {
    icon: ArrowUpDown,
    title: "Innbytte",
    description: "Vi tar gjerne bil din i innbytte",
    features: ["Markedspris", "Rask vurdering", "Enkel prosess"],
    href: "/tjenester/innbytte"
  },
  {
    icon: Shield,
    title: "Forsikring",
    description: "Vi tilbyr og hjelper deg gjerne med forsikring",
    features: ["Konkurransedyktige priser", "Ekspertråd", "Fullservice"],
    href: "/tjenester/forsikring"
  },
  {
    icon: CreditCard,
    title: "Finansiering",
    description: "Vi tilbyr lån fra 0 kr i egenkapital og inntil 10 års nedbetaling",
    features: ["Gunstige renter", "Fleksible vilkår", "Rask behandling"],
    href: "/tjenester/finansiering"
  }
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Våre tjenester
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi tilbyr en komplett pakke med tjenester for å gjøre ditt bilkjøp
            så enkelt og smidig som mulig.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={service.href}>
                        Les mer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/tjenester">
              Se alle tjenester
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}