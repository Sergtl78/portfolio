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
    <section className=' flex  w-full h-full  min-h-dvh flex-col items-center justify-center  gap-y-9 p-6'>
      <div className='flex w-full flex-col gap-y-2 items-center justify-center -rotate-[20deg]'>
        <h1>{page.home.title}</h1>
        <h3>{page.home.subtitle}</h3>
      </div>
      <h3 className='flex w-full md:mt-40 items-center justify-center'>
        {page.home.description}
      </h3>
    </section>
  )
}
