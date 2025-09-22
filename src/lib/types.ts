export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  range: number
  batteryCapacity: number
  chargingTime: string
  power: number
  images: string[]
  description: string
  features: string[]
  condition: 'new' | 'used'
  availability: 'available' | 'reserved' | 'sold'
  location: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  vehicleId?: string
  serviceType?: string
}

export interface BookingForm {
  name: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  serviceType: string
  message?: string
}