import Image from 'next/image'
import { toDateString } from '@/lib/utils'
import { type PostType } from '@/types/post'
import { EyeIcon } from './Icons'

type Props = {
	post: PostType
}

export function PostPreview({ post }: Props) {
	return (
		<article className='xl:w-[500px] overflow-hidden rounded-2xl border border-[#555]'>
			<Image
				src={post.image}
				alt={`${post.title} cover`}
				width={500}
				height={400}
				className='h-64 w-full object-cover'
			/>
			<div className='h-48 border-t px-5 py-6 border-[#555] bg-[rgba(0,0,0,0.7)]'>
				<h3 className='text-xl font-bold leading-8 tracking-tight'>{post.title}</h3>
				<p className='text-lg my-2 line-clamp-3 whitespace-pre-line italic text-gray-400'>
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
	)
}
