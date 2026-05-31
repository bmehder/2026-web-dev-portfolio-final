import { json } from '@sveltejs/kit'

const faqs = [
	{
		title: 'What is an accordion component?',
		content:
			'An accordion is a UI pattern that allows users to expand and collapse sections of content.',
		name: 'faq',
	},
	{
		title: 'Why use the details element?',
		content:
			'The details element provides built-in accessibility and native open and close behavior without JavaScript. The details element provides built-in accessibility and native open and close behavior without JavaScript. The details element provides built-in accessibility and native open and close behavior without JavaScript. The details element provides built-in accessibility and native open and close behavior without JavaScript.',
		name: 'faq',
	},
	{
		title: 'What does interpolate-size do?',
		content:
			'The interpolate-size property allows CSS transitions between fixed sizes and intrinsic sizes like auto.',
		name: 'faq',
	},
	{
		title: 'Can details elements be animated?',
		content:
			'Yes. Modern browsers now support smoother open and close animations using the details-content pseudo-element.',
		name: 'faq',
	},
	{
		title: 'What is progressive enhancement?',
		content:
			'Progressive enhancement is the practice of starting with accessible core functionality and enhancing the experience for modern browsers.',
		name: 'faq',
	},
]

export const GET = () => json(faqs)
