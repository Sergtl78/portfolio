'use client'
import TooltipComponent from './Tooltip'
import { IconCSS, IconHtml5, IconJavaScript, IconTypeScript } from './icons'

const SkillsLanguages = () => {
  return (
    <div className='mx-4 flex flex-row items-center space-x-2'>
      <TooltipComponent text={'Html5'}>
        <IconHtml5 className='h-10 w-10' />
      </TooltipComponent>
      <TooltipComponent text={'CSS'}>
        <IconCSS className='h-10 w-10' />
      </TooltipComponent>

      <TooltipComponent text={'JavaScript'}>
        <IconJavaScript className='h-10 w-10' />
      </TooltipComponent>

      <TooltipComponent text={'TypeScript'}>
        <IconTypeScript className='h-10 w-10' />
      </TooltipComponent>
    </div>
  )
}

export default SkillsLanguages
