import { readFile } from 'fs/promises'
import Link from 'next/link'

export default async function PostPage({ params }) {
	const post = await getPost(params)

	return (
		<>
			<article>
				<h1 className='text-5xl'>{post.title}</h1>
				<img src={post.image} className='' />
				<p>{post.content}</p>
			</article>
			<Link className='text-blue-500' href={'/posts'}>
				Back to posts
			</Link>
		</>
	)
}

async function getPost(params) {
	const { slug } = params
	const path = process.cwd()
	const { posts } = await readFile(`${path}/src/posts/data.json`)
		.then((bufferFile) => bufferFile.toString())
		.then((file) => JSON.parse(file))

	const post = posts.find((post) => post.slug === slug)

	return post
}
