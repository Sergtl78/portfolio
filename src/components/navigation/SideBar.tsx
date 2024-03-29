import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'
import Menu from './Menu'
const SideBar = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang)
  return (
    <aside className=' w-1/4 hidden md:flex '>
      <div className=' flex h-full w-full flex-col items-center justify-between p-4 py-10'>
        <Menu lang={lang} menu={navigation} />
      </div>
    </aside>
  )
}

export default SideBar
