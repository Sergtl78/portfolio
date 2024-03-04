import { constructMetadata } from '@/lib/constructMetadata'
import { getDictionary } from '@/lib/dictionaries'
import Image from 'next/image'
import { Locale } from '~i18n.config'
import Coding from '../../../public/giphy.gif'
type HomeProps = {
  params: {
    lang: Locale
  }
}

export function generateMetadata({ params }: HomeProps) {
  return constructMetadata({ params, path: 'home' })
}

export default async function Home({ params }: HomeProps) {
  const { page } = await getDictionary(params.lang)
  return (
    <section className=' flex  w-full h-full  min-h-dvh flex-col items-center justify-start  gap-y-9 p-6'>
      <Image
        src={Coding}
        alt={'coding'}
        width={400}
        height={400}
        className='mt-8'
      />
      <div className='flex w-full flex-col gap-y-2 items-center justify-center -rotate-[20deg] mt-10'>
        <h1>{page.home.title}</h1>
        <h3>{page.home.subtitle}</h3>
      </div>
      <h3 className='flex w-full md:mt-10 items-center justify-center'>
        {page.home.description}
      </h3>
    </section>
  )
}
