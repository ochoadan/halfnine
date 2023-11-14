import Markdoc from '@markdoc/markdoc'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import glob from 'fast-glob'
import * as fs from 'fs'
import * as path from 'path'

const slugify = slugifyWithCounter()

function extractSections(node, sections, isRoot = true) {
  if (isRoot) {
    slugify.reset()
  }
  if (node.type === 'heading' || node.type === 'paragraph') {
    let content = toString(node).trim()
    if (node.type === 'heading' && node.attributes.level <= 2) {
      let hash = node.attributes?.id ?? slugify(content)
      sections.push([content, hash, []])
    } else {
      sections.at(-1)[2].push(content)
    }
  } else if ('children' in node) {
    for (let child of node.children) {
      extractSections(child, sections, false)
    }
  }
}


export default function getAllMarkdownFiles() {
  let cache = new Map()

  const postsDir = path.resolve('./src/app')
  const files = glob.sync('**/*.md', { cwd: postsDir })
  let data = files.map((file) => {
    let url =
      file === 'page.md' ? '/' : `/${file.replace(/\/page\.md$/, '')}`
    let md = fs.readFileSync(path.join(postsDir, file), 'utf8')

    let sections

    if (cache.get(file)?.[0] === md) {
      sections = cache.get(file)[1]
    } else {
      let ast = Markdoc.parse(md)
      let title =
        ast.attributes?.frontmatter?.match(
          /^title:\s*(.*?)\s*$/m,
        )?.[1]
      sections = [[title, null, []]]
      extractSections(ast, sections)
      cache.set(file, [md, sections])
    }

    return { url, title: sections[0][0], sections: sections.slice(1) }
  })

  return data
}
