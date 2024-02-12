import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { appData } from '@/config/appData'
import { cn } from '@/lib/utils'
import '@/style/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AnimateBackground from '@/components/AnimateBackground'
import Navbar from '@/components/Navbar'
import { Locale, i18n } from '~i18n.config'
import { generateViewport } from '../../lib/generateViewport'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: appData.title,
  description: appData.description
}
generateViewport()

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <AnimateBackground>
            <Navbar lang={params.lang} />
            <main className='container flex  min-h-dvh '>
              <SideBar lang={params.lang} />
              {children}
            </main>
            <Footer lang={params.lang} />
          </AnimateBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}
