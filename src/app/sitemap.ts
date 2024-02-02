import { MetadataRoute } from 'next'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: `${siteUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    }
  ]
}
