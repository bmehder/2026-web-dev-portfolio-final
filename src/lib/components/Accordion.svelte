<script>
	let { title, children, name } = $props()
</script>

<details {name}>
	<summary>{title}</summary>
	{#if !!children}
		{@render children()}
	{/if}
</details>

<style>
	details::details-content {
		block-size: 0;
		overflow: hidden;

		transition: block-size 250ms ease,
		content-visibility 250ms allow-discrete;
	}

	details[open]::details-content {
		block-size: auto;
	}
</style>