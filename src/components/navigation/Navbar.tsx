import { appData } from '@/config/appData'
import { getDictionary } from '@/lib/dictionaries'
import Image from 'next/image'
import Link from 'next/link'
import { Locale } from '~i18n.config'
import MobileMenu from '../navigation/MobileMenu'
import { Button } from '../ui/button'
import { Switchers } from './Switchers'

type NavbarProps = {
  lang: Locale
}
const Navbar = async ({ lang }: NavbarProps) => {
  const { navigation, social_title } = await getDictionary(lang)
  return (
    <nav className='sticky left-0 top-0 z-50 flex h-14 w-full  px-4 py-2  md:h-20 items-center'>
      <div className='container flex w-full items-center justify-between '>
        <div className='flex'>
          <div className='md:hidden'>
            <MobileMenu
              lang={lang}
              navigation={navigation}
              social_title={social_title}
            />
          </div>
          <Link href={'/'} className='hidden md:flex items-center '>
            <Button variant={'ghost'} size={'sm'}>
              <Image src={appData.logo} alt='logo' width={40} height={40} />
            </Button>
          </Link>
          {/* <Link
            href={'ru/myResume.pdf'}
            //alt='alt text'
            target='_blank'
            rel='noopener noreferrer'
            download
            locale={false}
            className='hidden md:flex items-center '
          >
            <Button variant={'ghost'} size={'sm'}>
              Resume
            </Button>
          </Link> */}
        </div>

        <Switchers />
      </div>
    </nav>
  )
}

export default Navbar
