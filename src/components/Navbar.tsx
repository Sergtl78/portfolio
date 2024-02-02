import { appData } from '@/config/appData'
import Link from 'next/link'
import Menu from './Menu'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='sticky left-0 top-0 z-50 flex h-14 w-full border-b border-border bg-background px-4 py-2 shadow md:h-20'>
      <div className='container flex w-full items-center justify-between '>
        <div className='flex'>
          <div className='md:hidden'></div>
          <Link href={'/'}>
            <Button variant={'ghost'} size={'sm'}>
              <h1 className='text-2xl font-bold'>{appData.title}</h1>
            </Button>
          </Link>
        </div>
        <Menu lang={'ru'} menu={[]} />
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
