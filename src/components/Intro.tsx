import Link from 'next/link'

export function Intro() {
	return (
		<>
			<header className='w-full flex-col md:flex-row flex items-center md:justify-between pt-16 mb-16 md:mb-12'>
				<h1 className='text-5xl md:text-8xl text-center font-bold tracking-tighter leading-tight md:pr-8'>
					MB Blog
				</h1>
				<h3 className='text-center md:text-left text-lg mt-5 md:pl-8'>
					Tecnología y programación
				</h3>
			</header>

			<div className='flex justify-end'>
				<Link href={'/posts'}>
					<h3 className='text-3xl mb-3 font-bold'>
						POSTS <span className='text-[24px] align-top'>→</span>
					</h3>
				</Link>
			</div>
		</>
	)
}
