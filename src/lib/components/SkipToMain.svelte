<script>
	let { style = "", href = "#main", text = "Skip to Main" } = $props()
</script>

<a {style} {href}>{text}</a>

<style>
	a {
		--skip-to-main-margin: 1rem;

		position: absolute;
		margin: var(--skip-to-main-margin);
		padding-block: 0.5rem;
		padding-inline: 1rem;
		border-radius: 0.25rem;
		transform: translateY(calc(-100% - var(--skip-to-main-margin)));
		transition: transform 0.2s;

		&:focus {
			transform: unset;
		}
	}
</style>
