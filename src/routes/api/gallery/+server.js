import { json } from '@sveltejs/kit'

const images = [
	'https://picsum.photos/id/10/800/500',
	'https://picsum.photos/id/20/800/500',
	'https://picsum.photos/id/30/800/500',
	'https://picsum.photos/id/40/800/500',
	'https://picsum.photos/id/50/800/500',
]

export const GET = () => json(images)