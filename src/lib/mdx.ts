import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import { Locale } from '~i18n.config'

const rootDirectory = path.join(process.cwd(), 'src', 'content')

export const getDescriptionBySlug = async ({
  slug,
  lang = 'ru'
}: {
  slug: string
  lang?: Locale
}) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, lang, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX<{
    title: string
    description: string
  }>({
    source: fileContent,
    options: { parseFrontmatter: true }
  })
  console.log(frontmatter.title)

  return {
    meta: {
      ...frontmatter,
      slug: realSlug
    },
    content
  }
}
