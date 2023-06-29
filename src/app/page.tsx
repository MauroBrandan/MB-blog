import Link from 'next/link'

import { posts } from '@/posts/data.json'
import { Intro } from '@/components/Intro'
import { PostPreview } from '@/components/PostPreview'
import {RowOfPosts} from '@/components/RowOfPosts'

export default function Home() {
	const lastPost = posts[0]

	return (
		<>
			<Intro />
			<section className='md:text-xl mt-12'>
				<h3 className='text-3xl underline mb-3'>Ultimo Post</h3>
				<Link href={`/posts/${lastPost.slug}`}>
					<PostPreview post={lastPost} />
				</Link>
			</section>

			<section className='md:text-xl mt-12'>
				<Link href={'/posts'}>
					<h3 className='text-3xl underline mb-3'>Mas Posts</h3>
				</Link>
				<RowOfPosts posts={posts.slice(1)}/>
			</section>
		</>
	)
}
