<script>
	import DarkLogo from '$lib/assets/logo-dark.svg'
	import Hamburger from '$lib/assets/icons/hamburger.svg'
	import Close from '$lib/assets/icons/close.svg'

	let isOpen = $state(false)

	const closeNav = () => (isOpen = false)
</script>

<header>
	<div class="outer">
		<div class="inner">
			<div class="container">
				<a href="/" class="logo">
					<img src={DarkLogo} alt="logo" />
				</a>

				<button
					aria-label="Toggle navigation"
					aria-expanded={isOpen}
					aria-controls="site-nav"
					onclick={() => (isOpen = !isOpen)}
				>
					{#if isOpen}
						<img src={Close} alt="close icon" />
					{:else}
						<img src={Hamburger} alt="open icon" />
					{/if}
				</button>

				<nav id="site-nav" class={{ open: isOpen }}>
					<ul>
						<li><a href="/" onclick={closeNav}>Home</a></li>
						<li><a href="/about" onclick={closeNav}>About</a></li>
						<li>
							<a href="/portfolio" onclick={closeNav}>Portfolio</a>
						</li>
						<li>
							<a class="button bg-primary light" href="/contact" onclick={closeNav}
								>Contact</a
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>

<style>
	.inner {
		padding-block: 1.5rem;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* --- Mobile Trigger --- */
	button {
		width: 2rem;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;

		@media (width > 48rem) {
			display: none;
		}
	}

	/* --- Nav --- */
	ul {
		margin: 0;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 0;
		list-style: none;
	}

	/* --- Mobile styles --- */
	@media (width < 48rem) {
		.container {
			flex-wrap: wrap;
		}

		nav {
			min-width: 100%;
			display: grid;
			grid-template-rows: 0fr;
		}

		ul {
			flex-direction: column;
			align-items: start;
			overflow: hidden;
		}

		/* Open state */
		.open {
			min-height: 100svh;
			grid-template-rows: 1fr;
			margin-top: 1rem;
		}
	}
</style>
