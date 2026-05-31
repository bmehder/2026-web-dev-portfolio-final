// export const load = ({ fetch }) =>
// 	fetch('/api/slides')
// 		.then(response => response.json())
// 		.then(slides => {
// 			return { slides }
// 		})

export async function load({ fetch }) {
	const [slidesResponse, faqsResponse] = await Promise.all([
		fetch('/api/slides'),
		fetch('/api/faqs')
	])

	const [slides, faqs] = await Promise.all([
		slidesResponse.json(),
		faqsResponse.json()
	])

	return {
		slides,
		faqs
	}
}
