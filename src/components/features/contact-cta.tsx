"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Klar for din neste elbil?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ta kontakt med våre eksperter i dag. Vi hjelper deg med å finne den
            perfekte elbilen for dine behov.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Ring oss
                </h3>
                <p className="text-muted-foreground mb-4">
                  Snakk direkte med våre eksperter
                </p>
                <Button asChild>
                  <Link href="tel:+4791732999">
                    +47 917 32 999
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Send e-post
                </h3>
                <p className="text-muted-foreground mb-4">
                  Vi svarer vanligvis innen 24 timer
                </p>
                <Button asChild>
                  <Link href="mailto:post@elbilhallen.no">
                    Send melding
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Besøk oss
                </h3>
                <p className="text-muted-foreground mb-4">
                  Hovebakken 33, 4306 Sandnes
                </p>
                <Button asChild>
                  <Link href="/kontakt">
                    Finn oss
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-xl mb-4">
              Åpningstider
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-foreground">Mandag - Fredag</p>
                <p className="text-muted-foreground">10:00 – 17:00</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Lørdag</p>
                <p className="text-muted-foreground">10:00 – 14:00</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Søndag</p>
                <p className="text-muted-foreground">Stengt</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}