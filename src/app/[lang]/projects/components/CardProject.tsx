import { ProjectSlideType } from '@/config/projectSlides'
import { Dictionary } from '@/lib/dictionaries'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Locale } from '~i18n.config'
import AppLink from '../../../../components/AppLink'
import ProjectTool from './ProjectTool'
import SliderProject from './SliderProject'

type Props = {
  projectText: Dictionary['page']['projects']['portfolio']
  projectSlides: ProjectSlideType
  lang?: Locale
}

const CardProject = ({ projectText, projectSlides, lang }: Props) => {
  return (
    <div className='flex w-full h-full'>
      <div className='grid md:grid-cols-5 w-full h-full  gap-4  items-center justify-start  border rounded-2xl shadow'>
        <div className='md:col-span-2 flex md:pl-4'>
          <SliderProject project={projectSlides} />
        </div>
        <div className='relative md:col-span-3 flex flex-col gap-4 w-full p-4'>
          <h3>{projectText.name}</h3>
          <p>{projectText.description}</p>

          <ProjectTool tools={projectText.tools} />
          <AppLink
            lang={lang || 'ru'}
            className='text-sm w-full flex  justify-end'
            href={projectText.link}
          >
            {projectText.linkTitle}
          </AppLink>
          <Link
            className='absolute top-4 right-4 '
            href={projectText.gitUrl}
            target='_blank'
          >
            <GitHubLogoIcon className='w-8 h-8' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardProject
