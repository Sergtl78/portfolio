'use client'

import { redirectedPathName } from '@/lib/redirectedPathName'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '~i18n.config'
import { Button } from './ui/button'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  return (
    <div className='flex items-center justify-center'>
      <Link href={redirectedPathName({ locale: 'ru', pathName })}>
        <Button
          variant={'ghost'}
          className={
            pathName.startsWith('/ru')
              ? 'text-foreground'
              : 'text-muted-foreground'
          }
        >
          {i18n.locales[0]}
        </Button>
      </Link>
      {' | '}
      <Link href={redirectedPathName({ locale: 'en', pathName })}>
        <Button
          variant={'ghost'}
          className={
            pathName.startsWith('/en')
              ? 'text-foreground'
              : 'text-muted-foreground'
          }
        >
          {i18n.locales[1]}
        </Button>
      </Link>
    </div>
  )
}
