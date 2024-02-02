type Props = {
  params?: { slug: string }
}

const ProjectPage = ({ params }: Props) => {
  return <div>ProjectPage{params?.slug}</div>
}

export default ProjectPage
