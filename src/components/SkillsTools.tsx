'use client'
import TooltipComponent from './Tooltip'
import { IconDocker, IconFigma, IconGit } from './icons'

const SkillsTools = () => {
  return (
    <div className='mx-4 flex flex-row items-center space-x-2'>
      <TooltipComponent text={'Docker'}>
        <IconDocker className='h-10 w-10' />
      </TooltipComponent>
      <TooltipComponent text={'Git'}>
        <IconGit className='h-10 w-10' />
      </TooltipComponent>

      <TooltipComponent text={'Figma'}>
        <IconFigma className='h-12 w-12' />
      </TooltipComponent>
    </div>
  )
}

export default SkillsTools
