import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/projects', '/skills', '/projects/**']
    },
    sitemap: [
      'https://localhost:3000/sitemap.xml',
      'https://portfolio-sergtl78.vercel.app/sitemap.xml'
    ]
  }
}
