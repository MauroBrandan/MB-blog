export const toDateString = ({
	date,
	short
}: {
	date: Date | undefined
	short?: boolean
}) => {
	const options = short ? {} : {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	} as Intl.DateTimeFormatOptions

	return new Date(date || '2001/01/05').toLocaleDateString('es', options)
}
