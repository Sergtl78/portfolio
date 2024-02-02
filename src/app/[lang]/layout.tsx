import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { appData } from '@/config/appData'
import { cn } from '@/lib/utils'
import '@/style/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AnimateBackground from '@/components/AnimateBackground'
import { Switchers } from '@/components/Switchers'
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
          {/*  <Navbar /> */}

          <AnimateBackground>
            <main className='container relative flex flex-1 '>
              <Switchers />
              <SideBar lang={params.lang} />
              {children}
            </main>
          </AnimateBackground>

          <Footer lang={params.lang} />
        </ThemeProvider>
      </body>
    </html>
  )
}
