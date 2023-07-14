import Image from 'next/image'
import { remark } from 'remark'
import html from 'remark-html'
import { toDateString } from '@/lib/utils'
import { type PostsAPIResponse } from '@/types/post'
import { ScrollTop } from '@/components/ScrollTop'

type Props = {
	params: {
		slug: string
	}
}

export default async function PostPage({ params }: Props) {
	const post = await getPost(params.slug)
	const { data, content } = post || {}
	const htmlContent = await markdownToHtml(content || '')

	return (
		<>
			<article className=''>
				<header className='w-full mx-auto my-8 py-5 border-b text-center border-gray-700'>
					<small className='text-base font-medium leading-6 text-gray-400'>
						{toDateString(data?.date, { weekday: 'long' })}
					</small>
					<h1 className='mt-3 text-5xl font-bold'>{data?.title}</h1>
				</header>
				<Image
					src={data?.image || ''}
					alt='post image'
					width={1280}
					height={720}
					className='h-64 w-full max-w-3xl mx-auto object-cover object-center'
				/>
				<main
					className='markdown max-w-3xl mx-auto'
					dangerouslySetInnerHTML={{ __html: htmlContent }}
				/>
			</article>
			<ScrollTop />
		</>
	)
}

async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown)
	return result.toString()
}

async function getPost(slug: string) {
	const res = await fetch('http://localhost:3000/api?content=true')
	const data: PostsAPIResponse[] = await res.json()

	const post = data.find((post) => post.data.slug === slug)

	return post
}
