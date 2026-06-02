<script>
	let { images } = $props()

	let current = $state(0)
	let mainImage = $derived(images[current])

	const handleNext = () => {
		current = (current + 1) % images.length
	}

	const handlePrev = () => {
		current = (current - 1 + images.length) % images.length
	}
</script>

<div class="gallery">
	<img class="main-image" src={mainImage} alt="" />

	<div class="controls">
		<button onclick={handlePrev}>←</button>
		<button onclick={handleNext}>→</button>
	</div>

	<div class="thumbnails auto-fit" style="--auto-fit-min: 6rem">
		{#each images as src, index}
			<button
				class={{ selected: current === index }}
				onclick={() => (current = index)}
			>
				<img {src} alt="" />
			</button>
		{/each}
	</div>
</div>

<style>
	.gallery {
		display: grid;
    gap: 1rem;
	}

  img {
    border-radius: 0.5rem;
  }

	.main-image {
		grid-column: 1;
		grid-row: 1;
	}

	.controls {
		grid-column: 1;
		grid-row: 1;

		display: flex;
		justify-content: space-between;
		align-items: center;

    margin-inline: 0.5rem;

    button {
      inline-size: clamp(2rem, 4vw, 3.5rem);
      block-size: clamp(2rem, 4vw, 3.5rem);

      display: grid;
      place-content: center;

      padding: 0;

      background-color: rgba(0, 0, 0, 0.5);
      color: var(--color-white);

      border-radius: 50%;

      font-size: 1.5rem;

      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
	}

  .thumbnails {
    display: grid;
    gap: 0.5rem;
    
    button {
      padding: 0;
      border-radius: 0.5rem;
    }
  }

	.selected {
		outline: 2px solid var(--color-blue-hover);
	}
</style>
