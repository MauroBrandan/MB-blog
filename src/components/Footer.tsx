import { CodeBracketsIcon, GitHubIcon, LinkedinIcon } from '@/components/Icons'

export function Footer() {
	return (
		<footer className='flex justify-center items-center gap-5 font-bold italic text-lg mt-5 w-full h-32'>
			<a href='http://maurobrandan.com' target='_blank' rel='noopener noreferrer'>
				<CodeBracketsIcon />
			</a>
			<a
				href='https://github.com/MauroBrandan'
				target='_blank'
				rel='noopener noreferrer'
			>
				<GitHubIcon />
			</a>
			<a
				href='https://www.linkedin.com/in/maurobrandan'
				target='_blank'
				rel='noopener noreferrer'
			>
				<LinkedinIcon />
			</a>
		</footer>
	)
}
