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

<article class="card">
	{#if image}
		<a {href}><img class="card-image" src={image} alt="describe the thing" /></a>
	{/if}
	<div class="card-info">
		<div>
			<div class="card-eyebrow">{eyebrow}</div>
			<h3 class="card-title"><a {href}>{title}</a></h3>
		</div>
		<p class="card-excerpt">{excerpt}</p>
		<a class="card-button bg-primary" {href}>{buttonLabel}</a>
	</div>
</article>

<style>
	.card {
		display: grid;
		grid-template-rows: auto 1fr;
		background-color: white;
		color: black;
		border: 1px solid var(--color-grey);
		border-radius: 0.25rem;
		overflow: hidden;
	}

	/* Image Reset */
	img {
		display: block;
		width: 100%;
		height: auto;
	}

	.card-image {
		aspect-ratio: 1;
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
	}

	.card-button {
		padding: 1rem;
		/* background-color: var(--blue); */
		color: white;
		text-align: center;
		text-decoration: none;
		font-weight: bold;
		border-radius: 0.25rem;
	}

	.card-excerpt {
		font-size: 0.9rem;
	}
</style>
