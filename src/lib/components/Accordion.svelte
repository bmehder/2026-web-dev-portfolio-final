<script>
	let { title, children, name } = $props()
</script>

<details {name}>
	<summary>{title}</summary>
	{#if !!children}
		<div>{@render children()}</div>
	{/if}
</details>

<style>
	details::details-content {
		padding-inline: 1rem;
	}

	div {
		padding-block: 1rem;
	}

	summary {
		position: relative;
		margin-block: 0.5rem;
		padding: 0.5rem;
		outline: 1px solid var(--color-gray);
		border-radius: 0.25rem;
	}

	summary::marker {
		content: "+";
		font-weight: bold;
	}
	
	details[open] summary::marker {
		content: "-";
		font-weight: bold;
	}
</style>