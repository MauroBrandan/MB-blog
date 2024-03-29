import Image from 'next/image'
import { getAllPosts, getPostMDX } from '@/lib/posts'
import { toDateString } from '@/lib/utils'
import { type PostsAPIResponse } from '@/types/post'
import { ScrollTop } from '@/components/ScrollTop'
import { Particles } from '@/components/Particles'
import { MDXComponent } from '@/components/MDXComponents'

type Props = {
	params: {
		slug: string
	}
}

export default async function PostPage({ params }: Props) {
	const { data, content } = await getPost(params.slug)

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
				<main className='markdown max-w-3xl mx-auto'>
					<MDXComponent content={content || ''}/>
				</main>
			</article>
			<ScrollTop />
			<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
		</>
	)
}

async function getPost(slug: string) {
	const post: PostsAPIResponse = await getPostMDX(slug)
	return post
}

export async function generateStaticParams() {
	const posts: PostsAPIResponse[] = getAllPosts({withContent: false})
   
	return posts.map((post) => ({
	  slug: post.data.slug,
	}))
}