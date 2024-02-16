'use client'
import { Dictionary } from '@/lib/dictionaries'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { Locale } from '~i18n.config'
import Social from '../Social'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Menu from './Menu'

type MobileMenuProps = {
  lang: Locale
  navigation: Dictionary['navigation']
  social_title: string
}

const MobileMenu = ({
  lang = 'ru',
  navigation,
  social_title
}: MobileMenuProps) => {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={'ghost'}>
          <HamburgerMenuIcon className='w-6 h-6' />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className='flex flex-col h-full justify-between'
      >
        <Menu lang={lang} menu={navigation} setOpen={setOpen} />
        <Social h3Social={social_title} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
