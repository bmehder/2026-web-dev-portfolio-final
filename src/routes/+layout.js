export const load = ({ fetch }) =>
	fetch('/api/slides')
		.then(response => response.json())
		.then(slides => {
			return {
				slides,
			}
		})
