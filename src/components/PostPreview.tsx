import Image from "next/image"
import { type PostType } from "@/types/post"
import { toDateString } from "@/lib/utils"

type Props = {
	post: PostType
}

export function PostPreview({ post }: Props) {
	return (
		<article className="xl:w-[500px] overflow-hidden rounded-2xl border border-[#555]">
        	<Image src={post.image} alt={`${post.title} cover`} width={500} height={400} className="h-64 w-full object-cover"/>
			<div className="h-48 border-t px-5 py-8 border-[#555] bg-[rgba(0,0,0,0.7)]">
				<h3 className="text-xl font-bold leading-8 tracking-tight">
					{post.title}
				</h3>
				<p className="text-lg my-2 line-clamp-3 whitespace-pre-line italic text-gray-400">
					{post.excerpt}
				</p>
				<p className="flex gap-5 my-2 text-sm text-gray-400">
					<span>{toDateString(post.date)}</span>
					<span>Views: 55</span>
				</p>
			</div>
		</article>
	)
}