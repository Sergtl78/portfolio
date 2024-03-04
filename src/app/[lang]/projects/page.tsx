import CardProject from '@/app/[lang]/projects/components/CardProject'
import { projectsSlides } from '@/content/projectSlides'
import { constructMetadata } from '@/lib/constructMetadata'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'

type ProjectsPageProps = {
  params: { lang: Locale }
}
export function generateMetadata({ params }: ProjectsPageProps) {
  return constructMetadata({ params, path: 'projects' })
}
const ProjectsPage = async ({ params }: ProjectsPageProps) => {
  const { page } = await getDictionary(params.lang || 'ru')

  return (
    <section className=' flex w-full  min-h-dvh flex-col items-start justify-center gap-6  md:p-6 mt-12 md:mt-8'>
      <h1 className='flex w-full items-center justify-center'>
        {page.projects.title}
      </h1>
      <CardProject
        lang={params.lang}
        projectText={page.projects.portfolio}
        projectSlides={projectsSlides.portfolio}
      />
      <CardProject
        lang={params.lang}
        projectText={page.projects.shop}
        projectSlides={projectsSlides.shop}
      />
      <CardProject
        lang={params.lang}
        projectText={page.projects.nest_auth}
        projectSlides={projectsSlides.nest_auth}
      />
    </section>
  )
}

export default ProjectsPage
