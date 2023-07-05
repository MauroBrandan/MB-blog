import Link from 'next/link'
import { type PostsAPIResponse } from '@/types/post'
import { Intro } from '@/components/Intro'
import { PostPreview } from '@/components/PostPreview'
import {RowOfPosts} from '@/components/RowOfPosts'

export default async function Home() {
	const posts = await getPostsData()
	const lastPost = posts[0]

	return (
		<>
			<Intro />
			<section className='md:text-xl mt-12'>
				<h3 className='text-3xl underline mb-3'>Ultimo Post</h3>
				{<Link href={`/posts/${lastPost.slug}`}>
					<PostPreview post={lastPost} />
				</Link>}
			</section>

			<section className='md:text-xl mt-12'>
				<Link href={'/posts'}>
					<h3 className='text-3xl underline mb-3'>Mas Posts</h3>
				</Link>
				<RowOfPosts posts={posts}/>
			</section>
		</>
	)
}

async function getPostsData() {
	const res = await fetch('http://localhost:3000/api')
	const data: PostsAPIResponse[] = await res.json()
	
	const postsData = data.map((post) => post.data)

	return postsData
}
