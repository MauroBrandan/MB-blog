export const toDateString = (
	date: Date | undefined,
	options?: Intl.DateTimeFormatOptions
) => {
	const opts: Intl.DateTimeFormatOptions = !options
		? {}
		: {
				weekday: options.weekday,
				day: options.day || 'numeric',
				month: options.month || 'long',
				year: options.year || 'numeric'
		  }

	return new Date(date || '2001/01/05').toLocaleDateString('es', opts)
}
