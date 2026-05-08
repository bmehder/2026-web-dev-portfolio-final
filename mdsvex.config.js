import { defineMDSveXConfig as defineConfig } from 'mdsvex'

import { createHighlighter } from 'shiki'

const highlighter = await createHighlighter({
	themes: ['github-dark'],
	langs: ['svelte', 'js', 'html', 'css'],
})

const config = defineConfig({
	extensions: ['.svx', '.md'],
	highlight: {
		highlighter: (code, lang = 'text') => {
			const html = highlighter.codeToHtml(code, {
				lang,
				theme: 'github-dark',
			})
			return `{@html \`${html.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`}`
		},
	},
})

export default config
