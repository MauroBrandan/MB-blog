import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MB Blog',
	description: 'Mauro Brandan Blog: Tecnología y programación'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body className={`${inter.className} relative`}>
				<main className='container mx-auto px-5'>{children}</main>
			</body>
		</html>
	)
}
