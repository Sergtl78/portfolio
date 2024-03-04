import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { IconEmail, IconLinkedin, IconTelegram, IconWhatsapp } from './icons'

type Props = {
  h3Social?: string
}

const Social = ({ h3Social }: Props) => {
  return (
    <section className='flex flex-col md:flex-row gap-4 items-center text-primary-foreground'>
      <p className='mb-0'>{h3Social}</p>
      <div className=' flex  flex-row items-center justify-center gap-4'>
        <Link
          href={'mailto:sertl78@yandex.ru'}
          target='_blank'
          aria-label='Email'
        >
          <IconEmail className='h-8 w-8 text-primary-foreground' />
        </Link>

        <Link
          href={'https://www.linkedin.com/in/talatushin-sergey'}
          target='_blank'
          aria-label='LinkedIn'
        >
          <IconLinkedin className='h-8 w-8' />
        </Link>

        <Link
          href={'https://github.com/Sergtl78'}
          target='_blank'
          aria-label='GitHub'
        >
          <GitHubLogoIcon className='h-8 w-8 text-primary-foreground' />
        </Link>

        <Link
          href={'https://t.me/Sergtl'}
          target='_blank'
          aria-label='Telegram'
        >
          <IconTelegram className='h-8 w-8' />
        </Link>

        <Link
          href={'https://api.whatsapp.com/send/?phone=79200204613'}
          target='_blank'
          aria-label='WhatsApp'
        >
          <IconWhatsapp className={` fill-white`} />
        </Link>
      </div>
    </section>
  )
}

export default Social
