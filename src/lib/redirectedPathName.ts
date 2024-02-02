import { i18n } from '~i18n.config'

export const redirectedPathName = ({
  locale,
  pathName
}: {
  locale: string
  pathName: string
}) => {
  if (!pathName) return '/'

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    if (locale === i18n.defaultLocale) return pathName
    return `/${locale}${pathName}`
  } else {
    if (locale === i18n.defaultLocale) {
      const segments = pathName.split('/')
      const isHome = segments.length === 2
      if (isHome) return '/'

      segments.splice(1, 1)
      return segments.join('/')
    }

    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
}
