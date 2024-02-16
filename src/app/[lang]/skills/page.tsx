import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '~i18n.config'
import SkillsLanguages from './components/SkillsLanguages'
import SkillsLibraries from './components/SkillsLibraries'
import SkillsTools from './components/SkillsTools'

type SkillsPageProps = {
  params: { lang: Locale }
}

const SkillsPage = async ({ params }: SkillsPageProps) => {
  const { page } = await getDictionary(params.lang)
  return (
    <section className=' flex  w-full  min-h-dvh flex-col items-start justify-center gap-y-9 p-6 '>
      <h1 className='flex w-full items-center justify-center'>
        {page.skills.title}
      </h1>

      <div className='mx-4 mb-4 flex flex-col items-start'>
        <h3>{page.skills.languages}</h3>
        <SkillsLanguages />
      </div>

      <div className='mx-4 mb-4 flex flex-col items-start '>
        <h3>{page.skills.libraries}</h3>
        <SkillsLibraries />
      </div>
      <div className='mx-4 flex flex-col items-start'>
        <h3>{page.skills.tools}</h3>
        <SkillsTools />
      </div>
    </section>
  )
}

export default SkillsPage
