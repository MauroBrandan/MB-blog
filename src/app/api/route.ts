import { NextResponse } from 'next/server'
import { type PostsAPIResponse } from '@/types/post'
import { getPosts } from '@/lib/posts'

export async function GET(request: Request) {
	const url = new URL(request.url)
	const searchParams = Object.fromEntries(url.searchParams.entries())
	const withContent = searchParams.content === 'true'

	const posts: PostsAPIResponse[] = getPosts({ withContent: withContent })
	return NextResponse.json(posts, { status: 200 })
}
