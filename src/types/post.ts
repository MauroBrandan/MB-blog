export type PostType = {
	id: string
	title: string
	slug: string
	date: string
	image: string
	ogImage: string
	excerpt: string
}

export type PostsAPIResponse = {
	data: PostType
	content?: string
}
