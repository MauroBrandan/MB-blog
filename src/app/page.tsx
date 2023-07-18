import Link from 'next/link'
import { type PostsAPIResponse } from '@/types/post'
import {Particles} from '@/components/Particles'
import { Intro } from '@/components/Intro'
import { LastPost } from '@/components/LastPost'
import { ListOfPosts } from '@/components/ListOfPosts'
import {Footer} from '@/components/Footer'

export default async function HomePage() {
	const posts = await getPostsData()
	const lastPost = posts[0]

	return (
		<>
			<Intro />
			<section className='flex flex-col gap-16 md:text-xl xl:h-[70vh] xl:grid grid-cols-[1fr,0.5fr] xl:gap-24'>
				<section className='flex flex-col gap-3'>
					<h3 className='text-3xl mb-3 font-bold'>ULTIMO POST</h3>
					<LastPost post={lastPost}/>
				</section>	
				<aside>
					<Link href={'/posts'}>
						<h3 className='text-3xl mb-3 font-bold'>POSTS <span className='text-[24px] align-top'>→</span></h3>
					</Link>
					<div className='xl:h-[65vh] xl:overflow-x-hidden xl:overflow-y-scroll xl:no-scrollbar'>
						<ListOfPosts posts={posts.slice(1)}/>
					</div>
				</aside>
			</section>
			<Footer />
			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={555}/>
		</>
	)
}

async function getPostsData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts`)
	
	const data: PostsAPIResponse[] = await res.json()
	
	const postsData = data.map((post) => post.data)

	return postsData
}
