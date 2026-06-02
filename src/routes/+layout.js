// export const load = ({ fetch }) =>
// 	fetch('/api/slides')
// 		.then(response => response.json())
// 		.then(slides => {
// 			return { slides }
// 		})

export async function load({ fetch }) {
	const [slidesResponse, faqsResponse, galleryResponse] = await Promise.all([
		fetch('/api/slides'),
		fetch('/api/faqs'),
		fetch('/api/gallery'),
	])

	const [slides, faqs, gallery] = await Promise.all([
		slidesResponse.json(),
		faqsResponse.json(),
		galleryResponse.json(),
	])

	return {
		slides,
		faqs,
		gallery
	}
}
