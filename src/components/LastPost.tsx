import Link from 'next/link'
import Image from 'next/image'
import { toDateString } from '@/lib/utils'
import { type PostType } from '@/types/post'
import { EyeIcon } from './Icons'

type Props = {
	post: PostType
}

export function LastPost({ post }: Props) {
	return (
		<Link href={`/posts/${post.slug}`}>
			<article className='flex flex-col gap-3'>
				<Image
					src={post.image}
					alt={`${post.title} cover`}
					width={700}
					height={600}
					className='object-cover self-center rounded-2xl'
				/>
				<div className='h-auto px-5 py-8 bg-[rgba(0,0,0,0.7)]'>
					<h3 className='text-2xl font-bold leading-8 tracking-tight'>
						{post.title}
					</h3>
					<p className='my-2 whitespace-pre-line italic text-gray-400'>
						{post.excerpt}
					</p>
					<p className='flex items-center gap-5 my-2 text-sm text-gray-400'>
						<span>{toDateString(post.date)}</span>
						<span className='flex items-center'>
							<EyeIcon color='#9CA3AF' />: 55
						</span>
					</p>
				</div>
			</article>
		</Link>
	)
}
