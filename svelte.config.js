import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-auto'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) =>
			filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
	},

	kit: {
		adapter: adapter(),
	},

	preprocess: [mdsvex(mdsvexConfig)],

	extensions: ['.svelte', '.svx', '.md'],
}

export default config
