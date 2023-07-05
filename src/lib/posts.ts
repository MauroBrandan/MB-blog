import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { type PostsAPIResponse } from '@/types/post'

type Params = {
	withContent?: boolean
}

export function getPosts({ withContent }: Params) {
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
