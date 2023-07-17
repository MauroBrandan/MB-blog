import { NextResponse } from 'next/server'
import { type PostsAPIResponse } from '@/types/post'
import { getPost, getPostMDX } from '@/lib/posts'

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } }
) {
	const { slug } = params
	const url = new URL(request.url)
	const searchParams = Object.fromEntries(url.searchParams.entries())
	const withMdx = searchParams.mdx === 'true'
	let post: PostsAPIResponse

	try {
		if (withMdx) {
			post = await getPostMDX(slug)
		} else {
			post = getPost(slug)
		}

		return NextResponse.json(post, { status: 200 })
	} catch (error: any) {
		return NextResponse.json({ Error: error.message }, { status: 404 })
	}
}
