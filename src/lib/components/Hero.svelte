<section>
	<div class="outer">
		<div class="inner">
			<div class="content bg-gradient-primary light">
				<h1>Maximize skill, minimize budget</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus id
					repellat pariatur! Quia, recusandae perferendis.
				</p>
				<a href="/portfolio" class="button bg-gradient-accent light"
					>View Portfolio</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.outer {
		background-image: url(/hero-2.jpg);
		background-size: cover;
		background-position: center;
		color: var(--color-white);
	}

	.inner {
		padding-block: 8rem;
	}

	.content {
		max-width: 32rem;
		padding: 3rem;
		border-radius: 2rem;

		animation: hero-animation linear;
		animation-timeline: view();
		animation-range: exit;
	}

	@keyframes hero-animation {
		50%, 100% {
			opacity: 0;
			scale: 1.25;
		}
	}

	h1 {
		color: var(--color-white);
	}

	h1 {
		margin-top: 0;
	}

	p {
		color: var(--color-white);
	}

	.button {
		margin-top: 0.75rem;
	}

	.button:hover {
		text-decoration: none;
	}
</style>
