import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'

type Props = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params }: Props) {
  const { page } = await getDictionary(params.lang)
  return (
    <section className=' flex  w-full h-full  min-h-dvh flex-col items-start justify-center gap-y-9 p-6'>
      <h1 className='flex w-full items-center justify-start'>
        {page.home.title}
      </h1>
      <h2>Я веб-разработчик</h2>
    </section>
  )
}
