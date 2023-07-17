import { NextResponse } from 'next/server'
import { type PostsAPIResponse } from '@/types/post'
import { getAllPosts } from '@/lib/posts'

export async function GET(request: Request) {
	const url = new URL(request.url)
	const searchParams = Object.fromEntries(url.searchParams.entries())
	const withContent = searchParams.content === 'true'

	try {
		const posts: PostsAPIResponse[] = getAllPosts({ withContent: withContent })
		return NextResponse.json(posts, { status: 200 })
	} catch (error: any) {
		return NextResponse.json({ Error: error.message }, { status: 500 })
	}
}
