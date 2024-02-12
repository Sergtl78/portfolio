import { appData } from '@/config/appData'
import Image from 'next/image'
import Link from 'next/link'
import { Locale } from '~i18n.config'
import MobileMenu from './MobileMenu'
import { Switchers } from './Switchers'
import { Button } from './ui/button'

type NavbarProps = {
  lang: Locale
}
const Navbar = ({ lang }: NavbarProps) => {
  return (
    <nav className='sticky left-0 top-0 z-50 flex h-14 w-full  px-4 py-2  md:h-20 items-center'>
      <div className='container flex w-full items-center justify-between '>
        <div className='flex'>
          <div className='md:hidden'>
            <MobileMenu lang={lang} />
          </div>
          <Link href={'/'} className='hidden md:flex items-center '>
            <Button variant={'ghost'} size={'sm'}>
              <Image src={appData.logo} alt='logo' width={40} height={40} />
            </Button>
          </Link>
        </div>

        <Switchers />
      </div>
    </nav>
  )
}

export default Navbar
