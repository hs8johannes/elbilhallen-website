"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Battery, Gauge, Calendar, Zap, Shield, Phone, Mail, Heart, Share2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { vehicles } from "@/data/vehicles"
import { formatPrice, formatDistance, formatYear, cn } from "@/lib/utils"

interface VehicleDetailPageProps {
  params: { id: string }
}

export default function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const vehicle = vehicles.find(v => v.id === params.id)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button variant="ghost" asChild>
            <Link href="/biler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tilbake til alle biler
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {/* Main image */}
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden relative">
                <Image
                  src={vehicle.images[selectedImageIndex]}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-cover"
                />

                {/* Status badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span
                    className={cn(
                      "px-3 py-1 text-sm font-medium rounded-full",
                      vehicle.condition === "new"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    {vehicle.condition === "new" ? "Ny" : "Brukt"}
                  </span>
                  {vehicle.availability !== "available" && (
                    <span
                      className={cn(
                        "px-3 py-1 text-sm font-medium rounded-full",
                        vehicle.availability === "reserved"
                          ? "bg-orange-500 text-white"
                          : "bg-red-500 text-white"
                      )}
                    >
                      {vehicle.availability === "reserved" ? "Reservert" : "Solgt"}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-background/80 backdrop-blur-sm"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "")} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Thumbnail images */}
              <div className="grid grid-cols-3 gap-2">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={cn(
                      "aspect-[4/3] bg-muted rounded-lg overflow-hidden border-2 transition-colors",
                      selectedImageIndex === index
                        ? "border-primary"
                        : "border-transparent hover:border-border"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${vehicle.make} ${vehicle.model} ${index + 1}`}
                      width={150}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vehicle info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {vehicle.make} {vehicle.model}
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatYear(vehicle.year)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Gauge className="h-4 w-4" />
                  <span>{formatDistance(vehicle.mileage)}</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-primary/5 rounded-lg p-4">
              <p className="font-heading font-bold text-3xl text-primary">
                {formatPrice(vehicle.price)}
              </p>
            </div>

            {/* Key specs */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Battery className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Rekkevidde</p>
                  <p className="font-semibold text-lg">{vehicle.range} km</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Effekt</p>
                  <p className="font-semibold text-lg">{vehicle.power} hk</p>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Beskrivelse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {vehicle.description}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Utstyr og funksjoner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vehicle.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Tekniske spesifikasjoner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Batterikapasitet</span>
                    <span className="font-medium">{vehicle.batteryCapacity} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ladetid</span>
                    <span className="font-medium">{vehicle.chargingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lokasjon</span>
                    <span className="font-medium">{vehicle.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full" asChild>
                <Link href={`/kontakt?vehicle=${vehicle.id}`}>
                  <Shield className="h-5 w-5 mr-2" />
                  Jeg er interessert
                </Link>
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" asChild>
                  <Link href="tel:+4791732999">
                    <Phone className="h-4 w-4 mr-2" />
                    Ring oss
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:post@elbilhallen.no">
                    <Mail className="h-4 w-4 mr-2" />
                    Send e-post
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}