import { Dictionary } from '@/lib/dictionaries'
import { Badge } from '@/ui/badge'

type Props = {
  tools: Dictionary['page']['projects']['portfolio']['tools']
}

const ProjectTool = ({ tools }: Props) => {
  return (
    <div className='flex w-full flex-col md:flex-row gap-2'>
      <b>{tools.title}:</b>
      <ul className='flex flex-wrap gap-2 w-full'>
        {tools.name.split(',').map((tool, index) => (
          <li key={tool + index}>
            <Badge
              variant={'outline'}
              className='whitespace-nowrap text-sm border-primary '
            >
              {tool}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectTool
