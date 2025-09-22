import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('nb-NO', {
    style: 'currency',
    currency: 'NOK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatDistance(distance: number): string {
  return new Intl.NumberFormat('nb-NO').format(distance) + ' km'
}

export function formatYear(year: number): string {
  return year.toString()
}