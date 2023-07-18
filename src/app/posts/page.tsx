import Link from 'next/link'
import { type PostsAPIResponse } from '@/types/post'
import { toDateString } from '@/lib/utils'
import { EyeIcon } from '@/components/Icons'
import { Particles } from '@/components/Particles'

export default async function PostsPage() {
	const posts = await getPostsData()

	return (
		<>
			<h1 className='text-5xl mb-3 font-bold'>Posts</h1>
			<ul className='divide-y divide-gray-700'>
				{posts.map((post) => (
					<li key={post.id} className='py-12'>
						<article>
							<div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
								<div>
									<p className='text-base font-medium leading-6 text-gray-400'>
										{toDateString(post.date, {
											day: 'numeric',
											month: 'long',
											year: 'numeric'
										})}
									</p>
								</div>
								<main className='space-y-5 xl:col-span-3'>
									<div className='space-y-6'>
										<div>
											<h2 className='text-2xl font-bold leading-8 tracking-tight'>
												<Link href={`/posts/${post.slug}`}>{post.title}</Link>
											</h2>
										</div>
										<div className='prose max-w-none text-gray-400'>
											{post.excerpt}
										</div>
									</div>
									<div className='flex gap-5 text-base font-medium leading-6'>
										<Link
											href={`/posts/${post.slug}`}
											aria-label={`Leer "${post.title}"`}
										>
											Leer más &rarr;
										</Link>
										<span className='flex items-center' aria-label='Vistas'>
											<EyeIcon />: 55
										</span>
									</div>
								</main>
							</div>
						</article>
					</li>
				))}
			</ul>
			<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={555} />
		</>
	)
}

async function getPostsData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api?content=false`)
	const data: PostsAPIResponse[] = await res.json()

	const postsData = data.map((post) => post.data)

	return postsData
}
