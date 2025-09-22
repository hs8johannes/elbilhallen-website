"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { vehicles } from "@/data/vehicles"

function ContactForm() {
  const searchParams = useSearchParams()
  const vehicleId = searchParams.get('vehicle')
  const selectedVehicle = vehicleId ? vehicles.find(v => v.id === vehicleId) : null

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: selectedVehicle
      ? `Hei! Jeg er interessert i ${selectedVehicle.make} ${selectedVehicle.model} (${selectedVehicle.year}). Kan dere kontakte meg for mer informasjon?`
      : "",
    vehicleId: vehicleId || "",
    serviceType: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Here you would typically send the data to your API
    console.log("Form submitted:", formData)

    setIsSubmitting(false)
    alert("Takk for din henvendelse! Vi kontakter deg snart.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      vehicleId: "",
      serviceType: ""
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send oss en melding</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {selectedVehicle && (
            <div className="bg-primary/5 rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground">Du er interessert i:</p>
              <p className="font-medium text-primary">
                {selectedVehicle.make} {selectedVehicle.model} ({selectedVehicle.year})
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Navn *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ditt fulle navn"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Telefon *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+47 xxx xx xxx"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              E-post *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="din@epost.no"
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
              Hva kan vi hjelpe deg med?
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full h-11 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value="">Velg tjeneste</option>
              <option value="kjop">Kjøp av elbil</option>
              <option value="innbytte">Innbytte av bil</option>
              <option value="finansiering">Finansiering</option>
              <option value="forsikring">Forsikring</option>
              <option value="frakt">Frakt/levering</option>
              <option value="annet">Annet</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Melding *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Beskriv hva vi kan hjelpe deg med..."
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              "Sender..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send melding
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function ContactPage() {
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
            Kontakt oss
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi er her for å hjelpe deg med alle dine elbilbehov. Ta kontakt i dag
            så finner vi den perfekte løsningen for deg.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Kontaktinformasjon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">
                      Hovebakken 33<br />
                      4306 Sandnes
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a
                      href="tel:+4791732999"
                      className="text-primary hover:underline"
                    >
                      +47 917 32 999
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">E-post</p>
                    <a
                      href="mailto:post@elbilhallen.no"
                      className="text-primary hover:underline"
                    >
                      post@elbilhallen.no
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Åpningstider</p>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Mandag - Fredag: 10:00 – 17:00</p>
                      <p>Lørdag: 10:00 – 14:00</p>
                      <p>Søndag: Stengt</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick contact buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Rask kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full">
                  <a href="tel:+4791732999">
                    <Phone className="h-4 w-4 mr-2" />
                    Ring oss nå
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="mailto:post@elbilhallen.no">
                    <Mail className="h-4 w-4 mr-2" />
                    Send e-post
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Suspense fallback={<div>Laster...</div>}>
              <ContactForm />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  )
}