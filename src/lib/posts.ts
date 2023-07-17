import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import { type PostsAPIResponse } from '@/types/post'
import rehypePrismPlus from 'rehype-prism-plus'

type Params = {
	withContent?: boolean
}

export function getAllPosts({ withContent }: Params) {
	const postsDirectory = join(process.cwd(), '_posts')
	const postsFiles = fs.readdirSync(postsDirectory)

	const posts = postsFiles
		.map((postFile) => {
			const fullPath = join(postsDirectory, postFile)
			const fileContents = fs.readFileSync(fullPath, 'utf8')
			const { data, content } = matter(fileContents)
			return withContent ? { data, content } : { data }
		})
		.sort((post1, post2) => post2.data.id - post1.data.id) // sort in descending order

	return posts as PostsAPIResponse[]
}

export function getPost(slug: string) {
	const postFile = getPostBySlug(slug)
	const { data, content } = matter(postFile)

	return { data, content } as PostsAPIResponse
}

export async function getPostMDX(slug: string) {
	const post = getPostBySlug(slug)

	const { code, frontmatter } = await bundleMDX({
		source: post,
		mdxOptions(options) {
			options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrismPlus]
			return options
		}
	})

	return { data: frontmatter, content: code } as PostsAPIResponse
}

function getPostBySlug(slug: string) {
	const mdxPath = join(process.cwd(), `_posts/${slug}.mdx`)
	const mdPath = join(process.cwd(), `_posts/${slug}.md`)

	if (!fs.existsSync(mdxPath) && !fs.existsSync(mdPath)) {
		throw new Error('The path does not exist')
	}

	const post = fs.existsSync(mdxPath)
		? fs.readFileSync(mdxPath, 'utf8')
		: fs.readFileSync(mdPath, 'utf8')

	return post
}
