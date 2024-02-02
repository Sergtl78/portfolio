import type { Viewport } from 'next'

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'light' },
      { media: '(prefers-color-scheme: dark)', color: 'dark' }
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
}
