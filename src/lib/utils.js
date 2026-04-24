export const formatDate = dateString => {
	if (!dateString) return ''

	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

export const formatPrice = n => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	})

	const formattedPrice = formatter.format(n)

	return formattedPrice
}