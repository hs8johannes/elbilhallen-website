"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Truck, ArrowUpDown, Shield, CreditCard, Calculator, Phone, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "frakt",
    icon: Truck,
    title: "Frakt",
    description: "Vi kan levere bilen der du ønsker i nesten hele Norge",
    features: [
      "Rask levering over hele landet",
      "Sikker transport med profesjonelle sjåfører",
      "Dørleveranse hjemme til deg",
      "Sporing av leveranse",
      "Forsikret transport"
    ],
    details: "Vårt fraktnettwerk dekker hele Norge og vi kan levere din nye elbil rett til døra. Med mange års erfaring og profesjonelle sjåfører sikrer vi at bilen din ankommer trygt og i perfekt stand.",
    href: "/tjenester/frakt"
  },
  {
    id: "innbytte",
    icon: ArrowUpDown,
    title: "Innbytte",
    description: "Vi tar gjerne bil din i innbytte",
    features: [
      "Markedspris for din bil",
      "Rask og profesjonell vurdering",
      "Enkel og smidig prosess",
      "Takser alle bilmerker",
      "Ingen skjulte kostnader"
    ],
    details: "Få en rettferdig pris for din nåværende bil. Våre eksperter vurderer bilen din profesjonelt og gir deg markedspris. Dette gjør det enkelt å finansiere din nye elbil.",
    href: "/tjenester/innbytte"
  },
  {
    id: "forsikring",
    icon: Shield,
    title: "Forsikring",
    description: "Vi tilbyr og hjelper deg gjerne med forsikring",
    features: [
      "Konkurransedyktige priser",
      "Ekspertråd fra våre forsikringsrådgivere",
      "Fullservice forsikringstjenester",
      "Tilpassede forsikringsløsninger",
      "Rask skadebehandling"
    ],
    details: "Vi samarbeider med ledende forsikringsselskaper for å gi deg best mulige betingelser. Våre forsikringseksperter hjelper deg med å finne den forsikringen som passer dine behov og budsjett.",
    href: "/tjenester/forsikring"
  },
  {
    id: "finansiering",
    icon: CreditCard,
    title: "Finansiering",
    description: "Vi tilbyr lån fra 0 kr i egenkapital og inntil 10 års nedbetaling",
    features: [
      "Gunstige renter",
      "Fleksible nedbetalingsperioder",
      "Rask behandling av lånesøknader",
      "Ingen skjulte kostnader",
      "Finansieringseksperter til disposisjon"
    ],
    details: "Gjør drømmen om en ny elbil til virkelighet med våre fleksible finansieringsløsninger. Vi tilbyr konkurransedyktige renter og kan tilpasse lånet til din økonomi.",
    href: "/tjenester/finansiering"
  }
]

export default function ServicesPage() {
  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Våre tjenester
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi tilbyr en komplett pakke med tjenester for å gjøre ditt elbilkjøp
            så enkelt og smidig som mulig. Fra søk til levering - vi hjelper deg hele veien.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="font-heading text-2xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.details}
                      </p>

                      <div className="space-y-2 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild>
                          <Link href={service.href}>
                            Les mer om {service.title.toLowerCase()}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/kontakt">
                            <Phone className="mr-2 h-4 w-4" />
                            Kontakt oss
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Icon/Visual */}
                    <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex items-center justify-center ${!isEven ? "lg:order-1" : ""}`}>
                      <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg">
                        <Icon className="h-24 w-24 text-primary mx-auto" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Klar for å komme i gang?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Ta kontakt med våre eksperter i dag. Vi hjelper deg med å finne den
                perfekte elbilen og løsningen for dine behov.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/kontakt">
                    Kontakt oss i dag
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/biler">
                    Se våre biler
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}