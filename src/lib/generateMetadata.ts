import { appData } from '@/config/appData'
import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: appData.title,
    description: appData.description
  }
}
