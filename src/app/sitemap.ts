import { MetadataRoute } from 'next'
import { vehicles } from '@/data/vehicles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elbilhallen.no'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/biler`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tjenester`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic vehicle pages
  const vehiclePages = vehicles.map((vehicle) => ({
    url: `${baseUrl}/biler/${vehicle.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...vehiclePages]
}