import CardProject from '@/components/CardProject'
import { projectsSlides } from '@/config/projectSlides'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'

type ProjectsPageProps = {
  params: { lang: Locale }
}
const ProjectsPage = async ({ params }: ProjectsPageProps) => {
  const { page } = await getDictionary(params.lang || 'ru')

  return (
    <section className=' flex h-screen w-full flex-col items-start justify-center gap-6  p-6 '>
      <h1 className='flex w-full items-center justify-center'>
        {page.projects.title}
      </h1>
      <CardProject
        projectText={page.projects.project1}
        project={projectsSlides.project1}
      />
      <CardProject
        projectText={page.projects.project2}
        project={projectsSlides.project2}
      />
    </section>
  )
}

export default ProjectsPage
