import Link from 'next/link'
import { type PostsAPIResponse } from '@/types/post'
import { PostPreview } from '@/components/PostPreview'

export default async function PostsPage() {
	const posts = await getPostsData()

	return (
		<>
			<h1 className='text-5xl mb-8'>Posts</h1>
			<ul className='grid grid-cols-2 gap-5'>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.slug}`}>
							<PostPreview post={post} />
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

async function getPostsData() {
	const res = await fetch('http://localhost:3000/api?content=false')
	const data: PostsAPIResponse[] = await res.json()
	
	const postsData = data.map((post) => post.data)

	return postsData
}
