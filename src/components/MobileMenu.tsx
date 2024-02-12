import { getDictionary } from '@/lib/dictionaries'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Locale } from '~i18n.config'
import Menu from './Menu'
import Social from './Social'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

type MobileMenuProps = {
  lang: Locale
}

const MobileMenu = async ({ lang = 'ru' }: MobileMenuProps) => {
  const { navigation, sidebar } = await getDictionary(lang)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'}>
          <HamburgerMenuIcon className='w-6 h-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <Menu lang={lang} menu={navigation} />
        <Social h3Social={sidebar.h3Social} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
