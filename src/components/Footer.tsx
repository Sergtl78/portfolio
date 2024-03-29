import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'
import Social from './Social'

type Props = {
  lang: Locale
}

async function Footer({ lang }: Props) {
  const { social_title, copyright } = await getDictionary(lang)
  return (
    <footer className='w-full border-t mt-10 '>
      <div className='flex bg-zinc-900 py-4 '>
        <div className='container'>
          <div className='flex flex-col-reverse md:flex-row w-full items-center justify-between gap-2'>
            <span className='mr-2 text-sm text-gray-400'>
              <span className='text-lg'>© </span>
              {copyright + ', ' + new Date().getFullYear()}
            </span>
            <Social h3Social={social_title} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
