import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'
import Menu from './Menu'
import Social from './Social'
const SideBar = async ({ lang }: { lang: Locale }) => {
  const { navigation, sidebar } = await getDictionary(lang)
  return (
    <aside className='min-h-screen w-1/4 hidden md:flex '>
      <div className=' flex h-full w-full flex-col items-center justify-between p-4 py-10'>
        <Menu lang={lang} menu={navigation} />
        <Social h3Social={sidebar.h3Social} />
      </div>
    </aside>
  )
}

export default SideBar
