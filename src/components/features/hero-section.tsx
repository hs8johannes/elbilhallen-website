"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Truck } from "lucide-react"
import { ButtonLink } from "@/components/ui/button-link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Din spesialist på{" "}
              <span className="text-primary">elbil</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              Med Norges mest allsidige kompetanse innen dette segmentet tilbyr vi
              skreddersydde løsninger for alle dine elbilbehov.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <ButtonLink size="lg" href="/biler">
                Se våre biler
                <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonLink>
              <ButtonLink variant="outline" size="lg" href="/kontakt">
                Kontakt oss
              </ButtonLink>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Rask levering</h3>
                  <p className="text-sm text-muted-foreground">Over hele Norge</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-3"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Kvalitetsgaranti</h3>
                  <p className="text-sm text-muted-foreground">Alle våre biler</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-3"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Komplett service</h3>
                  <p className="text-sm text-muted-foreground">Fra A til Å</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 lg:p-12">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
                <h3 className="font-heading font-semibold text-xl mb-4">Våre tjenester</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Salg av elbiler</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Frakt over hele Norge</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Innbytte av din bil</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Forsikring</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Finansiering</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}