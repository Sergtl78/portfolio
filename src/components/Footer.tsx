import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'

type Props = {
  lang: Locale
}

async function Footer({ lang }: Props) {
  const { sidebar } = await getDictionary(lang)
  return (
    <footer className='w-full border-t  '>
      <div className='flex bg-zinc-900 py-4 '>
        <div className='container'>
          <div className='flex w-full items-center justify-between gap-2'>
            <span className='mr-2 text-sm text-gray-400'>
              <span className='text-lg'>© </span>
              {sidebar.title + ', ' + new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
