'use client'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

export function MDXComponent({ content }: { content: string }) {
	const Component = useMemo(() => getMDXComponent(content), [content])

	return (
		<>
			<Component />
		</>
	)
}