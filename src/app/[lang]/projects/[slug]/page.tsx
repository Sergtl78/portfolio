import ProjectTool from '@/app/[lang]/projects/components/ProjectTool'
import SliderProject from '@/app/[lang]/projects/components/SliderProject'
import { projectsSlides } from '@/content/projectSlides'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'

import { getDescriptionBySlug } from '@/lib/mdx'

type SlugType =
  | 'auction_admin'
  | 'b2b'
  | 'portfolio'
  | 'shop_fiori'
  | 'next_wallet'
  | 'shop'
  | 'nest_auth'

type ProjectPageProps = {
  params?: { lang: Locale; slug: SlugType }
}

const getPageContent = async ({
  slug,
  lang
}: {
  slug: string
  lang: Locale
}) => {
  const { meta, content } = await getDescriptionBySlug({ slug, lang })
  return { meta, content }
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { meta } = await getPageContent({
    slug: typeof params?.slug === 'string' ? params?.slug : 'portfolio',
    lang: params?.lang || 'ru'
  })

  return { title: meta.title, description: meta.description }
}
export async function generateStaticParams() {
  return [{ slug: 'portfolio' }, { slug: 'shop' }]
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { content } = await getPageContent({
    slug: typeof params?.slug === 'string' ? params?.slug : 'portfolio',
    lang: params?.lang || 'ru'
  })
  const projectSlides = projectsSlides[params?.slug || 'portfolio']
  const dictionary = await getDictionary(params?.lang || `ru`)
  const toolsProject =
    dictionary.page.projects[params?.slug || 'portfolio'].tools
  return (
    <section className='flex w-full  min-h-dvh  flex-col items-star gap-y-8'>
      <SliderProject project={projectSlides} size='full' />
      <ProjectTool tools={toolsProject} />
      <div className='prose dark:prose-invert mb-8'>{content}</div>
    </section>
  )
}

export default ProjectPage
