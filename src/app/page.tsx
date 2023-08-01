import { getAllPosts } from '@/lib/posts'
import { type PostsAPIResponse } from '@/types/post'
import { Particles } from '@/components/Particles'
import { Intro } from '@/components/Intro'
import { Posts } from '@/components/Posts'
import { Footer } from '@/components/Footer'

export default async function HomePage() {
	const posts = await getPostsData()

	return (
		<>
			<Intro />
			<Posts posts={posts} />
			<Footer />
			<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={555} />
		</>
	)
}

async function getPostsData() {
	const posts: PostsAPIResponse[] = getAllPosts({ withContent: false })

	const postsData = posts.map((post) => post.data)

	return postsData
}
