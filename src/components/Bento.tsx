import Link from 'next/link'
import { type PostType } from '@/types/post'
import { PostPreviewBento } from './PostPreviewBento'

export function Bento({ posts }: { posts: PostType[] }) {
	return (
		<section className='flex flex-col gap-4 md:grid md:grid-cols-2 auto-rows-[300px] lg:grid-cols-3'>
			<Link
				href={`/posts/${posts[0].slug}`}
				className='row-span-2 col-span-2 rounded-xl border border-[#555] overflow-hidden'
			>
				<PostPreviewBento post={posts[0]} />
			</Link>

			{posts.slice(1, 5).map((post, i) => (
				<Link
					href={`/posts/${post.slug}`}
					key={i}
					className={`row-span-1 rounded-xl border border-[#555] overflow-hidden lg:line-clamp-1 ${
						i === 3 || i === 6 ? 'lg:col-span-2' : ''
					}`}
				>
					<PostPreviewBento post={post} />
				</Link>
			))}
		</section>
	)
}
