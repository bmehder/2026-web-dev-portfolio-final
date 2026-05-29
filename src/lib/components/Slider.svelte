<script>
	let { slides, borderRadius = '1.5rem', alignContent = 'end' } = $props()

	let current = $state(0)
	let offset = $derived(-current * 100)

	const prev = () => {
		if (current === 0) {
			current = slides.length - 1
		} else {
			current = current - 1
		}
	}

	const next = () => {
		if (current === slides.length - 1) {
			current = 0
		} else {
			current = current + 1
		}
	}
</script>

<div class="slider" style="border-radius: {borderRadius};">
	<div class="track" style="transform: translateX({offset}%);">
		{#each slides as slide}
			<div class="slide">
				<img src={slide.image} alt={slide.alt} />
				<div class="overlay"></div>
				<div class="content" style="align-content: {alignContent}">
					<div class="h2">{slide.title}</div>
					<p>{slide.text}</p>
					<a class="button" href={slide.href}>{slide.buttonLabel}</a>
				</div>
			</div>
		{/each}
	</div>

	<div class="controls">
		<button onclick={prev}>←</button>
		<button onclick={next}>→</button>
	</div>
</div>

<style>
	.slider {
		display: grid;
		overflow: hidden;
	}

	.track {
		min-inline-size: 0;
		grid-column: 1;
		grid-row: 1;
		display: flex;
		/* transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275); */
		transition: transform 500ms ease;
	}

	.slide {
		display: grid;
		min-inline-size: 100%;
	}

	.slide > * {
		grid-column: 1;
		grid-row: 1;
	}

	img {
		block-size: 100%;
		object-fit: cover;
	}

	.overlay {
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.8)
		);
	}

	.controls {
		grid-column: 1;
		grid-row: 1;
		z-index: 1;
		place-self: end;
		padding: clamp(1.5rem, 4vw, 4.5rem);
	}

	.content {
		display: grid;
		padding: clamp(1.5rem, 4vw, 4.5rem);
	}

	.h2 {
		color: var(--color-white);
		font-size: clamp(1.5rem, 4vw, 4.5rem);
	}

	p {
		color: var(--color-white);
	}

	.button {
		justify-self: start;
		background-color: var(--color-white);
	}
</style>
