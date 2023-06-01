export function PostPreview({ post }) {
	return (
		<article>
			<h2>{post.title}</h2>
			<img src={post.image} />
			<p>{post.excerpt}</p>
		</article>
	)
}
