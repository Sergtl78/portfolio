'use client'
import { IconVue } from '@/components/icons/Vue'
import TooltipComponent from '../../../../components/Tooltip'
import {
  IconArrow,
  IconExpress,
  IconGraphQL,
  IconLaptop,
  IconNestJS,
  IconNext,
  IconNodeJS,
  IconPrisma,
  IconReact,
  IconRedux,
  IconRestApi,
  IconServerColor,
  IconTRPC,
  IconTailwindCss,
  IconZustand
} from '../../../../components/icons'

const SkillsLibraries = () => {
  return (
    <div className='relative grid w-full grid-cols-1 md:grid-cols-3'>
      <div className='flex flex-col items-center justify-center'>
        <IconServerColor className='' />
        <div className='mx-4 flex flex-row items-center space-x-2'>
          <TooltipComponent text={'NodeJS'}>
            <IconNodeJS className='h-10 w-10' />
          </TooltipComponent>
          <TooltipComponent text={'Express'}>
            <IconExpress className='h-10 w-10 fill-foreground' />
          </TooltipComponent>
          <TooltipComponent text={'NestJS'}>
            <IconNestJS className='h-10 w-10' />
          </TooltipComponent>
          <TooltipComponent text={'Prisma'}>
            <IconPrisma className='h-10 w-10' />
          </TooltipComponent>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='mx-4 flex flex-col md:flex-row items-center justify-center gap-2 text-6xl'>
          <IconArrow className='h-8 w-8 -rotate-90 md:rotate-180 fill-foreground' />
          <div className='flex flex-row items-center justify-center gap-x-2'>
            <TooltipComponent text={'RestApi'}>
              <IconRestApi className='h-8 w-8 fill-foreground' />
            </TooltipComponent>
            <TooltipComponent text={'GraphQL'}>
              <IconGraphQL className='h-10 w-10' />
            </TooltipComponent>
            <TooltipComponent text={'tRPC'}>
              <IconTRPC className='h-10 w-10' />
            </TooltipComponent>
          </div>
          <IconArrow className='h-8 w-8 fill-foreground rotate-90 md:rotate-0' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <IconLaptop />
        <div className='mx-4 flex flex-row items-center space-x-2'>
          <TooltipComponent text={'TailwindCss'}>
            <IconTailwindCss className='h-10 w-10' />
          </TooltipComponent>
          <TooltipComponent text={'tRPC'}>
            <IconReact className='h-10 w-10' />
          </TooltipComponent>

          <TooltipComponent text={'Next.js'}>
            <IconNext className='h-10 w-10 fill-foreground' />
          </TooltipComponent>

          <TooltipComponent text={'Vue3'}>
            <IconVue className='h-10 w-10' />
          </TooltipComponent>

          <TooltipComponent text={'Redux'}>
            <IconRedux className='h-10 w-10' />
          </TooltipComponent>

          <TooltipComponent text={'Zustand'}>
            <IconZustand className='h-12 w-12' />
          </TooltipComponent>
        </div>
      </div>
    </div>
  )
}

export default SkillsLibraries
