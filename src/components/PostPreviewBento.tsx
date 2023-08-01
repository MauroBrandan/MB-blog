import Image from 'next/image'
import { toDateString } from '@/lib/utils'
import { type PostType } from '@/types/post'
import { EyeIcon } from './Icons'

type Props = {
	post: PostType
}

export function PostPreviewBento({ post }: Props) {
	return (
		<article className='w-full h-full'>
			<Image
				src={post.image}
				alt={`${post.title} cover`}
				width={500}
				height={400}
				className='w-full h-2/3 object-cover'
			/>
			<div className='h-1/3 border-t px-5 py-5 border-[#555] bg-[rgba(0,0,0,0.7)]'>
				<div className='flex flex-col lg:items-center lg:flex-row lg:gap-5'>
					<h3 className='text-xl font-bold leading-8 tracking-tight'>
						{post.title}
					</h3>
					<p className='flex items-center gap-5 my-2 text-sm text-gray-400'>
						<span>{toDateString(post.date)}</span>
						<span className='flex items-center'>
							<EyeIcon color='#9CA3AF' /> 55
						</span>
					</p>
				</div>
				<p className='text-lg my-2 whitespace-pre-line italic text-gray-400'>
					{post.excerpt}
				</p>
			</div>
		</article>
	)
}
