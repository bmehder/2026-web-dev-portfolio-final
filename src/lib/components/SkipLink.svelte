<script>
	let { style = '', href = '#main', text = 'Skip to Main' } = $props()
</script>

<a {style} {href}>{text}</a>

<style>
	a {
		--skip-link-margin: 1rem;

		position: absolute;
		margin: var(--skip-link-margin);
		padding-block: 0.5rem;
		padding-inline: 1rem;
		border-radius: 0.25rem;
		transform: translateY(calc(-100% - var(--skip-link-margin)));
		transition: transform 0.2s;

		&:focus {
			transform: translateY(0%);
		}
	}
</style>
