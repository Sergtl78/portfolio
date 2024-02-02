'use client'
import dist from '@/dictionaries/ru.json'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Locale } from '~i18n.config'
import NavLink from './NavLink'
import { Button } from './ui/button'

const Menu = ({
  lang,
  menu
}: {
  lang: Locale
  menu: typeof dist.navigation
}) => {
  const pathname = usePathname()

  return (
    <nav className=' my-10 flex flex-col'>
      <ul className='space-y-2'>
        {menu.map(menu => (
          <li key={menu.id}>
            <NavLink
              href={menu.url}
              lang={lang}
              className='group flex flex-row items-center justify-start '
            >
              <Button className='text-base' variant={'ghost'}>
                <div
                  className={cn(
                    'mr-4 h-1 w-10 rounded-full bg-foreground transition-all duration-500 active:w-20 group-hover:w-20',
                    `/${lang}${menu.url}` === pathname || menu.url === pathname
                      ? 'w-20 bg-primary '
                      : ''
                  )}
                />
                {menu.title}
              </Button>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
