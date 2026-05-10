<script>
	const radius = 80
	const circumference = 2 * Math.PI * radius

	let percent = $state(96)

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
			<circle class="spinner-background" r={radius} cx="85" cy="85" />

			<circle
				class="spinner-foreground"
				r={radius}
				cx="85"
				cy="85"
				style="stroke-dashoffset: {offset}"
			/>
		</svg>

		<div class="spinner-label">
			{percent}<span>%</span>
		</div>
	</div>

	{#if percent < 100}
		<h2>Download started</h2>

		<p>
			Once it's done, the files will be on your computer (often in the downloads
			folder).
		</p>
	{:else}
		<h2>Download complete!</h2>
	{/if}
</div>

<style>
	.card {
		width: 20rem;
		padding: 2rem;
		background: white;
		text-align: center;
		border-radius: 1.5rem;
		box-shadow: 0 10px 30px rgb(0 0 0 / 0.08);
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

	.spinner-label span {
		color: var(--color-grey);
		font-size: 2rem;
		transform: translateY(-12px);
	}

	@keyframes spin {
		to {
			rotate: 360deg;
		}
	}
</style>
