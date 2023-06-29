import { readFile } from 'fs/promises'
import Link from 'next/link'
import { type PostType} from '@/types/post'

type Params = {
	slug: string
}

export default async function PostPage({ params }: { params: Params }) {
	const post = await getPost(params)

	return (
		<section>
			<article>
				<h1 className='text-5xl'>{post.title}</h1>
				<img src={post.image} className='mt-3'/>
				<p>{post.content}</p>
			</article>

			<Link className='text-blue-300' href={'/posts'}>
				Back to posts
			</Link>
		</section>
	)
}

async function getPost(params: Params) {
	const { slug } = params
	const path = process.cwd()
	const { posts } = await readFile(`${path}/src/posts/data.json`)
		.then((bufferFile) => bufferFile.toString())
		.then((file) => JSON.parse(file))

	const post = posts.find((post: PostType) => post.slug === slug)

	return post
}
