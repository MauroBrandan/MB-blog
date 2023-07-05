import { NextResponse } from 'next/server'
import { type PostsAPIResponse } from '@/types/post'
import { getPosts } from '@/lib/posts'

export async function GET(request: Request) {
	const posts: PostsAPIResponse[] = getPosts({ withContent: true })
	return NextResponse.json(posts, { status: 200 })
}
