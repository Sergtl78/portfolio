import Link from 'next/link'
import { i18n } from '~i18n.config'

interface NavLinkProps {
  href: string
  lang: string
  children: React.ReactNode
  [key: string]: any
}

export default function AppLink({ href, lang, ...props }: NavLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale
  const path = isDefaultLang ? href : `/${lang}${href}`
  return <Link href={path} {...props} />
}
