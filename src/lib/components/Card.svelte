<script>
	let {
		image,
		eyebrow,
		title,
		excerpt,
		buttonLabel = 'View Project',
		href,
	} = $props()
</script>

<article class="card shadow-md">
	{#if image}
		<a {href}><img class="card-image" src={image} alt="describe the thing" /></a>
	{/if}
	<div class="card-info">
		<div>
			<div class="card-eyebrow">{eyebrow}</div>
			<h3 class="card-title"><a {href}>{title}</a></h3>
		</div>
		<p class="card-excerpt">{excerpt}</p>
		<a class="button justify-self-start" {href}>{buttonLabel}</a>
	</div>
</article>

<style>
	.card {
		display: grid;
		grid-template-rows: auto 1fr;
		background-color: var(--color-white);
		color: var(--color-black);
		border-radius: 0.25rem;
		overflow: hidden;
	}

	.card-image {
		aspect-ratio: 16/10;
		object-fit: cover;
	}

	.card-info {
		display: grid;
		grid-template-rows: auto 1fr auto;
		padding: 1.5rem;
	}

	.card-eyebrow {
		text-transform: uppercase;
		font-size: 0.8rem;
		opacity: 0.5;
	}

	.card-title {
		margin: 0;
		font-size: 1.375rem;
	}

	.card-excerpt {
		font-size: 0.9rem;
	}
</style>
