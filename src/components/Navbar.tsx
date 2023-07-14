import Link from 'next/link'

export function Navbar() {
	return (
		<nav className='flex justify-between items-center py-5 text-lg leading-5'>
			<div className='text-3xl font-bold'>
				<Link href={'/'}>MB</Link>
			</div>
			<div className='"py-1 font-medium sm:py-4'>
				<ul className='flex gap-8'>
					<li>
						<Link className='hover:underline' href={'/posts'}>
							Posts
						</Link>
					</li>
					<li>
						<a
							href='https://maurobrandan.com/'
							target='_blank'
							rel='noopener noreerrer'
							className='hover:underline'
						>
							Sobre mí
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
