import type { Metadata } from 'next'
import { Locale } from '~i18n.config'
import { Dictionary, getDictionary } from './dictionaries'

type MetadataProps = {
  params: { lang: Locale }
  //parent?: ResolvingMetadata
  path: keyof Dictionary['page']
}
export async function constructMetadata({
  params,

  path = 'home'
}: MetadataProps): Promise<Metadata> {
  const { page } = await getDictionary(params.lang || 'ru')
  return {
    title: page[path].meta.title || 'Web developer',
    description: page[path].meta.description,
    metadataBase: new URL('https://portfolio-sergtl78.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'ru-RU': '/ru'
      }
    },
    manifest: '/manifest.json',
    openGraph: {
      title: page[path].meta.title || 'Web developer',
      description: page[path].meta.description,
      url: 'https://portfolio-sergtl78.vercel.app',
      siteName: 'Portfolio',
      images: [
        {
          url: '/og.png',
          width: 800,
          height: 600
        },
        {
          url: '/og-alt.png',
          width: 1800,
          height: 1600,
          alt: 'Portfolio'
        }
      ],
      locale: 'ru_RU',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: page[path].meta.title || 'Web developer',
      description: page[path].meta.description,
      images: ['/og.png']
    }
  }
}
