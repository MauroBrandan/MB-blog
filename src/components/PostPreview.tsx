import { type PostType } from "@/types/post"

type Props = {
	post: PostType
}

export function PostPreview({ post }: Props) {
	return (
		<article>
			<h2>{post.title}</h2>
			<img src={post.image} />
			<p>{post.excerpt}</p>
		</article>
	)
}
