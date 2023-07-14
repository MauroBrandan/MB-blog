import * as React from 'react'
import { SVGProps } from 'react'

export const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={25}
		height={25}
		fill='none'
		viewBox='0 0 24 24'
		{...props}
	>
		<path
			stroke={props.color || '#e5e5e5'}
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M4 12s1.6-5 8-5m0 0c6.4 0 8 5 8 5m-8-5V4m6 1-2 2.5M6 5l2 2.5m7 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
		/>
	</svg>
)
