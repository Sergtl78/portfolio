import { ProjectType } from '@/config/projectSlides'
import { Dictionary } from '@/lib/dictionaries'
import SliderProject from './slider-project'
import Link from 'next/link'

type Props = {
  projectText: Dictionary['page']['projects']['project1']
  project: ProjectType
}

const CardProject = ({ projectText, project }: Props) => {
  return (
    <div className='flex w-full flex-col gap-4 md:flex-row  items-center justify-start p-4 border rounded-2xl shadow'>
      <SliderProject project={project} />
      <div className='flex flex-col w-full'>
        <h2>{projectText.name}</h2>
        <p>{projectText.description}</p>
        <p>{projectText.tools}</p>
      </div>
      <div className='flex flex-row w-full justify-end items-center'>
        <Link></Link>
      </div>
    </div>
  )
}

export default CardProject
