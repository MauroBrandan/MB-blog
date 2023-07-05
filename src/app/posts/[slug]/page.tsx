import Link from 'next/link'
import { type PostsAPIResponse} from '@/types/post'

type Props = {
	params: {
		slug: string
	}
}

export default async function PostPage({ params }: Props) {
	const post = await getPost(params.slug)
	const {data, content} =  post || {}

	return (
		<section>
			<article>
				<h1 className='text-5xl'>{data?.title}</h1>
				<img src={data?.image} className='mt-3'/>
				<p>{content}</p>
			</article>

			<Link className='text-blue-300' href={'/posts'}>
				Back to posts
			</Link>
		</section>
	)
}

async function getPost(slug: string) {
	const res = await fetch('http://localhost:3000/api')
	const data: PostsAPIResponse[] = await res.json()
	
	const post = data.find((post) => post.data.slug === slug)

	return post
}
