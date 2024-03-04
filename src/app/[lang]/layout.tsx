import Footer from '@/components/Footer'
import SideBar from '@/components/navigation/SideBar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import '@/style/global.css'
import { Inter } from 'next/font/google'

import AnimateBackground from '@/components/AnimateBackground'
import Navbar from '@/components/navigation/Navbar'
import { generateViewport } from '@/lib/generateViewport'
import { i18n, Locale } from '~i18n.config'

const inter = Inter({ subsets: ['latin'] })

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
