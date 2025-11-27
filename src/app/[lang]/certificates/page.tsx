import { Badge } from '@/components/ui/badge'
import { constructMetadata } from '@/lib/constructMetadata'
import { getDictionary } from '@/lib/dictionaries'
import Image from 'next/image'
import { Locale } from '~i18n.config'

type ProjectsPageProps = {
  params: { lang: Locale }
}
export function generateMetadata({ params }: ProjectsPageProps) {
  return constructMetadata({ params, path: 'certificates' })
}

const certificates = [
  {
    title: 'HTML',
    image: '/public/certificates/html/html.png',
    level: 'Продвинутый',
    link: '/html.pdf',
    downloadLink: '/html.sig'
  },
  {
    title: 'CSS',
    image: '/public/certificates/css/css.png',
    level: 'Продвинутый',
    link: '/css.pdf',
    downloadLink: '/css.sig'
  },
  {
    title: 'JavaScript',
    image: '/public/certificates/javascript/javascript.png',
    level: 'Продвинутый',
    link: '/javascript.pdf',
    downloadLink: '/javascript.sig'
  },
  {
    title: 'Git',
    image: '/public/certificates/git/git.png',
    level: 'Средний',
    link: '/git.pdf',
    downloadLink: '/git.sig'
  },
  {
    title: 'Docker',
    image: '/public/certificates/docker/docker.png',
    level: 'Базовый',
    link: '/docker.pdf',
    downloadLink: '/docker.sig'
  },
  {
    title: 'Api',
    image: '/public/certificates/api/api.png',
    level: 'Средний',
    link: '/api.pdf',
    downloadLink: '/api.sig'
  }
]
const ProjectsPage = async ({ params }: ProjectsPageProps) => {
  const { page } = await getDictionary(params.lang || 'ru')
  const cert = page.certificates.items
  return (
    <section className=' flex w-full  min-h-dvh flex-col items-start justify-start gap-6  md:p-6 mt-12 md:mt-8'>
      <div className='flex flex-col'>
        <h1 className='flex w-full items-start justify-start'>
          {page.certificates.title}
        </h1>
        <p>{page.certificates.subtitle}</p>
      </div>
      <section className='grid md:grid-cols-3 gap-4'>
        {cert.map(certificate => (
          <div key={certificate.title}>
            <h2>{certificate.title}</h2>
            <p>Уровень знания - {certificate.level}</p>
            <a
              href={certificate.link}
              target='_blank'
              //download
              className='mt-2 mb-4'
              rel='noopener noreferrer'
            >
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={500}
                height={800}
                className='bg-white w-full h-fit  border-black border-2 object-cover'
              />
            </a>
            <a
              href={certificate.downloadLink}
              target='_blank'
              download
              className='my-4 text-sm'
              rel='noopener noreferrer'
            >
              <Badge variant={'outline'}>{page.certificates.description}</Badge>
            </a>
          </div>
        ))}
      </section>
    </section>
  )
}

export default ProjectsPage
