import Link from "next/link"
import { type PostType } from "@/types/post"
import { PostPreview } from "./PostPreview"

type Props = {
	posts: PostType[]
}

export function RowOfPosts({ posts }: Props) {
  return (
    <div className='flex gap-12 [&>article>img]:w-64'>
        {posts.map((post) => (
			<Link href={`/posts/${post.slug}`}>
				<PostPreview post={post} />
			</Link>
		))}
	</div>
  )
}
