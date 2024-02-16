'use client'
import Link from 'next/link'
import { i18n } from '~i18n.config'

interface NavLinkProps {
  href: string
  lang: string
  setOpen?: (open: boolean) => void
  children: React.ReactNode
  [key: string]: any
}

export default function AppLink({
  href,
  lang,
  setOpen,
  ...props
}: NavLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale
  const path = isDefaultLang ? href : `/${lang}${href}`
  return (
    <Link href={path} {...props} onClick={() => setOpen && setOpen(false)} />
  )
}
