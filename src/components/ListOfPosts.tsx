import Link from "next/link"
import { type PostType } from "@/types/post"
import { PostPreview } from "./PostPreview"

type Props = {
	posts: PostType[]
}

export function ListOfPosts({ posts }: Props) {
  return (
    <div className='flex flex-col items-center gap-12 lg:grid lg:grid-cols-2 xl:flex'>
        {posts.map((post) => (
			<Link href={`/posts/${post.slug}`}>
				<PostPreview post={post} />
			</Link>
		))}
	</div>
  )
}
