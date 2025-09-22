"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Battery, Gauge, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Vehicle } from "@/lib/types"
import { formatPrice, formatDistance, formatYear } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface VehicleCardProps {
  vehicle: Vehicle
  index?: number
}

export function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative">
          <div className="aspect-[4/3] bg-muted relative overflow-hidden">
            <Image
              src={vehicle.images[0]}
              alt={`${vehicle.make} ${vehicle.model}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <span
              className={cn(
                "px-2 py-1 text-xs font-medium rounded-full",
                vehicle.condition === "new"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              {vehicle.condition === "new" ? "Ny" : "Brukt"}
            </span>
          </div>

          {/* Availability badge */}
          {vehicle.availability !== "available" && (
            <div className="absolute top-3 right-3">
              <span
                className={cn(
                  "px-2 py-1 text-xs font-medium rounded-full",
                  vehicle.availability === "reserved"
                    ? "bg-orange-500 text-white"
                    : "bg-red-500 text-white"
                )}
              >
                {vehicle.availability === "reserved" ? "Reservert" : "Solgt"}
              </span>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <div className="mb-3">
            <h3 className="font-heading font-semibold text-lg text-foreground">
              {vehicle.make} {vehicle.model}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
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

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-muted/50 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <Battery className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Rekkevidde</p>
                  <p className="font-semibold text-sm">{vehicle.range} km</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <Gauge className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Effekt</p>
                  <p className="font-semibold text-sm">{vehicle.power} hk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading font-bold text-xl text-foreground">
                {formatPrice(vehicle.price)}
              </p>
            </div>
            <Button asChild>
              <Link href={`/biler/${vehicle.id}`}>
                Se detaljer
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}