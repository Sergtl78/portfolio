'use client'
import { ProjectSlideType } from '@/content/projectSlides'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../../../components/ui/carousel'

type SliderProjectProps = {
  project: ProjectSlideType
  size?: 'card' | 'full'
}

const SliderProject = ({ project, size = 'card' }: SliderProjectProps) => {
  return (
    <Carousel
      opts={{
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}
      className='w-full'
    >
      <CarouselContent>
        {project.map((slide, index) => (
          <CarouselItem key={slide.id}>
            <div
              className={cn(
                'relative w-full bg-gradient-to-tl from-primary/50  ',
                size === 'full' &&
                  'md:h-[600px] md:max-w-full  w-full h-44 max-w-sm',
                size === 'card' && ' h-44 max-w-sm w-full'
              )}
            >
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                sizes={size === 'card' ? '20vw' : '80vw'}
                className='object-fill aspect-video'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={'ghost'}
        className='border border-border left-2 '
      />
      <CarouselNext
        variant={'ghost'}
        className='border border-border right-2'
      />
    </Carousel>
  )
}

export default SliderProject
