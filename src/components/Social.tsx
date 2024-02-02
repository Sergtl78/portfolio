import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { IconEmail, IconLinkedin, IconTelegram, IconWhatsapp } from './icons'

type Props = {
  h3Social?: string
}

const Social = ({ h3Social }: Props) => {
  return (
    <section className='flex flex-col gap-y-4'>
      <h4>{h3Social}</h4>
      <div className=' flex flex-row items-center justify-center gap-4'>
        <Link href={'mailto:sertl78@yandex.ru'} target='_blank'>
          <IconEmail className='h-8 w-8' />
        </Link>

        <Link
          href={'https://www.linkedin.com/in/talatushin-sergey'}
          target='_blank'
        >
          <IconLinkedin className='h-8 w-8' />
        </Link>

        <Link href={'https://github.com/Sergtl78'} target='_blank'>
          <GitHubLogoIcon className='h-8 w-8' />
        </Link>

        <Link href={'https://t.me/Sergtl'} target='_blank'>
          <IconTelegram className='h-8 w-8' />
        </Link>

        <Link
          href={'https://api.whatsapp.com/send/?phone=79200204613'}
          target='_blank'
        >
          <IconWhatsapp className='h-8 w-8' />
        </Link>
      </div>
    </section>
  )
}

export default Social
