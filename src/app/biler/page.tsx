"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { VehicleCard } from "@/components/vehicles/vehicle-card"
import { VehicleFilters } from "@/components/vehicles/vehicle-filters"
import { vehicles } from "@/data/vehicles"
import { Vehicle } from "@/lib/types"

interface FilterOptions {
  searchTerm: string
  make: string
  condition: string
  priceRange: [number, number]
  rangeMin: number
}

export default function VehiclesPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: "",
    make: "",
    condition: "",
    priceRange: [0, 2000000],
    rangeMin: 0
  })

  // Get unique makes for filter
  const makes = useMemo(() => {
    const uniqueMakes = Array.from(new Set(vehicles.map(v => v.make)))
    return uniqueMakes.sort()
  }, [])

  // Filter vehicles based on current filters
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle: Vehicle) => {
      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase()
        const matchesSearch =
          vehicle.make.toLowerCase().includes(searchLower) ||
          vehicle.model.toLowerCase().includes(searchLower) ||
          vehicle.description.toLowerCase().includes(searchLower) ||
          vehicle.features.some(feature => feature.toLowerCase().includes(searchLower))

        if (!matchesSearch) return false
      }

      // Make filter
      if (filters.make && vehicle.make !== filters.make) return false

      // Condition filter
      if (filters.condition && vehicle.condition !== filters.condition) return false

      // Price range filter
      if (vehicle.price < filters.priceRange[0] || vehicle.price > filters.priceRange[1]) return false

      // Range filter
      if (filters.rangeMin && vehicle.range < filters.rangeMin) return false

      return true
    })
  }, [filters])

  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Våre elbiler
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utforsk vårt utvalg av nye og brukte elbiler fra ledende merker.
            Alle biler er nøye inspektert og kommer med kvalitetsgaranti.
          </p>
        </motion.div>

        {/* Filters */}
        <VehicleFilters
          filters={filters}
          onFiltersChange={setFilters}
          makes={makes}
        />

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <p className="text-muted-foreground">
            Viser {filteredVehicles.length} av {vehicles.length} biler
          </p>
        </motion.div>

        {/* Vehicle grid */}
        {filteredVehicles.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVehicles.map((vehicle, index) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Ingen biler matcher dine søkekriterier
            </p>
            <p className="text-muted-foreground">
              Prøv å justere filtrene eller søkeordene dine
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}