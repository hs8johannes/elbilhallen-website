import { Vehicle } from '@/lib/types'

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 389000,
    mileage: 15000,
    range: 491,
    batteryCapacity: 75,
    chargingTime: '0-80% på 30 min',
    power: 283,
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    description: 'Elegant sedan med imponerende rekkevidde og teknologi',
    features: [
      'Autopilot',
      'Premium interiør',
      'Glastak',
      'Supercharging',
      '15" touchscreen'
    ],
    condition: 'used',
    availability: 'available',
    location: 'Sandnes'
  },
  {
    id: '2',
    make: 'BMW',
    model: 'iX3',
    year: 2024,
    price: 649000,
    mileage: 0,
    range: 460,
    batteryCapacity: 80,
    chargingTime: '0-80% på 34 min',
    power: 286,
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    description: 'Luksuriøs elektrisk SUV med BMW\'s signatur kjøreopplevelse',
    features: [
      'BMW Operating System 7',
      'Adaptiv fjæring',
      'Varme i forseter',
      'Parkeringssensorer',
      'LED-lys'
    ],
    condition: 'new',
    availability: 'available',
    location: 'Sandnes'
  },
  {
    id: '3',
    make: 'Volkswagen',
    model: 'ID.4',
    year: 2023,
    price: 459000,
    mileage: 8500,
    range: 520,
    batteryCapacity: 77,
    chargingTime: '0-80% på 38 min',
    power: 204,
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    description: 'Romslig familiebil med lang rekkevidde og praktisk design',
    features: [
      'ID.Light lysstripe',
      'Varme i ratt',
      'Digital cockpit',
      'App Connect',
      'Assistansesystemer'
    ],
    condition: 'used',
    availability: 'available',
    location: 'Sandnes'
  },
  {
    id: '4',
    make: 'Audi',
    model: 'e-tron GT',
    year: 2024,
    price: 1289000,
    mileage: 0,
    range: 488,
    batteryCapacity: 93.4,
    chargingTime: '0-80% på 22.5 min',
    power: 476,
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    description: 'Spektakulær elektrisk sportsbil med Gran Turismo-eleganse',
    features: [
      'Quattro firehjulsdrift',
      'Matrix LED',
      'Virtual Cockpit Plus',
      'Bang & Olufsen',
      'Luftfjæring'
    ],
    condition: 'new',
    availability: 'available',
    location: 'Sandnes'
  },
  {
    id: '5',
    make: 'Hyundai',
    model: 'IONIQ 5',
    year: 2023,
    price: 449000,
    mileage: 12000,
    range: 481,
    batteryCapacity: 72.6,
    chargingTime: '0-80% på 18 min',
    power: 225,
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    description: 'Innovativ crossover med rask lading og moderne design',
    features: [
      'Vehicle-to-load',
      'Biometrisk adgang',
      'Panoramatak',
      'Premium lydanlegg',
      'Smart Sense'
    ],
    condition: 'used',
    availability: 'reserved',
    location: 'Sandnes'
  },
  {
    id: '6',
    make: 'Polestar',
    model: '2',
    year: 2024,
    price: 549000,
    mileage: 0,
    range: 540,
    batteryCapacity: 78,
    chargingTime: '0-80% på 40 min',
    power: 300,
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    description: 'Minimalistisk skandinavisk design møter kraftfull ytelse',
    features: [
      'Google innebygd',
      'Performance pack',
      'Harman Kardon',
      'Pilot Assist',
      'WeaveTech interiør'
    ],
    condition: 'new',
    availability: 'available',
    location: 'Sandnes'
  }
]