'use client'
import { ProjectType } from '@/config/projectSlides'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel'

type SliderProjectProps = {
  project: ProjectType
}

const SliderProject = ({ project }: SliderProjectProps) => {
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
      className='w-full px-10 '
    >
      <CarouselContent>
        {project.map((slide, index) => (
          <CarouselItem key={slide.id}>
            <div className='relative w-full  max-w-sm h-44 md:h-44 bg-gradient-to-tl from-primary/50 '>
              <Image
                src={process.env.NEXT_PUBLIC_APP_URL + slide.url}
                alt={slide.alt}
                fill
                sizes='20vw'
                className='object-fill aspect-video'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={'ghost'}
        className='border border-border -left-0'
      />
      <CarouselNext
        variant={'ghost'}
        className='border border-border -right-0'
      />
    </Carousel>
  )
}

export default SliderProject
