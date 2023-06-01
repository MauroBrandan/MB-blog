import Link from 'next/link'
import { posts } from '@/posts/data.json'
import { PostPreview } from '@/components/PostPreview'

export default function PostPage() {
	return (
		<>
			<h1 className='text-5xl mb-8'>Posts</h1>
			<Link className='text-blue-500' href={'/'}>
				Back to home
			</Link>
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
