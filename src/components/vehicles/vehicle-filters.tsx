"use client"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FilterOptions {
  searchTerm: string
  make: string
  condition: string
  priceRange: [number, number]
  rangeMin: number
}

interface VehicleFiltersProps {
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
  makes: string[]
}

export function VehicleFilters({ filters, onFiltersChange, makes }: VehicleFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleFilterChange = (key: keyof FilterOptions, value: string | number | [number, number]) => {
    onFiltersChange({
      ...filters,
      [key]: value
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      searchTerm: "",
      make: "",
      condition: "",
      priceRange: [0, 2000000],
      rangeMin: 0
    })
  }

  const hasActiveFilters = filters.searchTerm || filters.make || filters.condition ||
    filters.priceRange[0] > 0 || filters.priceRange[1] < 2000000 || filters.rangeMin > 0

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        {/* Search and toggle */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Søk etter merke, modell eller funksjon..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center space-x-2">
            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Nullstill filtre
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtre
            </Button>
          </div>
        </div>

        {/* Advanced filters */}
        <div className={cn(
          "space-y-4 transition-all duration-300",
          isExpanded ? "block" : "hidden lg:block"
        )}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Make filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Merke
              </label>
              <select
                value={filters.make}
                onChange={(e) => handleFilterChange("make", e.target.value)}
                className="w-full h-11 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="">Alle merker</option>
                {makes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            {/* Condition filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tilstand
              </label>
              <select
                value={filters.condition}
                onChange={(e) => handleFilterChange("condition", e.target.value)}
                className="w-full h-11 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="">Alle</option>
                <option value="new">Ny</option>
                <option value="used">Brukt</option>
              </select>
            </div>

            {/* Price range */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Maks pris
              </label>
              <select
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange("priceRange", [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full h-11 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value={2000000}>Ingen grense</option>
                <option value={300000}>300 000 kr</option>
                <option value={500000}>500 000 kr</option>
                <option value={700000}>700 000 kr</option>
                <option value={1000000}>1 000 000 kr</option>
                <option value={1500000}>1 500 000 kr</option>
              </select>
            </div>

            {/* Range filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Min rekkevidde
              </label>
              <select
                value={filters.rangeMin}
                onChange={(e) => handleFilterChange("rangeMin", parseInt(e.target.value))}
                className="w-full h-11 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value={0}>Ingen krav</option>
                <option value={200}>200+ km</option>
                <option value={300}>300+ km</option>
                <option value={400}>400+ km</option>
                <option value={500}>500+ km</option>
              </select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}