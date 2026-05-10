<!-- Circumference: radius x PI x 2 -->

<script>
  const radius = 80
  const circumference = radius * Math.PI * 2

  let percent = $state(0)
  let offset = $derived(circumference - (percent / 100) * circumference)

  const effectCallback = () => {
    const intervalId = setInterval(() => {
      percent = percent + 1

      if (percent === 100) {
        clearInterval(intervalId)
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }

  $effect(effectCallback)
</script>

<div class="card">
	<div class="spinner">
		<svg class="spinner-circle" viewBox="0 0 170 170">
			<circle class="spinner-background" cx="85" cy="85" r="80" />
			<circle
				class="spinner-foreground"
				cx="85"
				cy="85"
				r="80"
				style="stroke-dashoffset: {offset}"
			/>
		</svg>
		<div class="spinner-label">
			{percent}<span>%</span>
		</div>
	</div>

	<div class="content">
    {#if percent === 100}
      <div class="heading">Download complete</div>
    {:else}
      <div class="heading">Download started</div>
      <p>
        Once it's done, the files will be on your computer (often in the downloads
        folder).
      </p>
    {/if}
	</div>
</div>

<style>
	.card {
		width: 22rem;
    display: grid;
    gap: 1rem;
		padding: 2rem;
		background-color: white;
		color: black;
		text-align: center;
		border-radius: 1.5rem;
		box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
	}

	.spinner {
		width: 170px;
		height: 170px;
		display: grid;
		place-items: center;
		margin-inline: auto;
	}

	.spinner-circle {
		grid-area: 1 / 1;
    animation: spin 2.5s linear infinite;
	}

	.spinner-background,
	.spinner-foreground {
		fill: none;
		stroke-width: 10;
	}

	.spinner-background {
		stroke: #e8ebed;
	}

	.spinner-foreground {
		stroke: hsl(233, 54%, 55%);
		stroke-linecap: round;
		stroke-dasharray: 502.65;
		transition: stroke-dashoffset 300ms ease;
	}

	.spinner-label {
		grid-area: 1 / 1;
		display: grid;
		grid-template-columns: auto auto;
		place-items: center;
		padding-inline-start: 0.5ch;
		font-family: monospace;
		font-size: 3.5rem;
	}

	.heading {
		font-size: 1.5rem;
	}

	.spinner-label span {
		font-size: 1.5rem;
		color: var(--color-grey);
		translate: 0 -12px;
	}

  .content p {
    margin: 0;
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
    }

    100% {
      rotate: 360deg;
    }
  }
</style>
