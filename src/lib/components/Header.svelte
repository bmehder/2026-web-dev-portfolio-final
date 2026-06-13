<script>
	import { afterNavigate } from '$app/navigation'
	import LightLogo from '$lib/assets/logo-light.svg'
	import Hamburger from '$lib/assets/icons/hamburger.svg'
	import Close from '$lib/assets/icons/close.svg'

	let isOpen = $state(false)

	const closeNav = () => {
		isOpen = false
	}

	$effect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''

		return () => {
			document.body.style.overflow = ''
		}
	})

	afterNavigate(() => {
		closeNav()
	})
</script>

<header>
	<div class="outer">
		<div class="inner">
			<div class="container">
				<a href="/" class="logo">
					<img src={LightLogo} alt="logo" />
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
						<li><a href="/">Home</a></li>
						<li class="has-submenu">
							<a href="/about">About</a>
							<ul class="submenu">
								<li><a href="/">SubPage 1</a></li>
								<li><a href="/">SubPage 2</a></li>
								<li><a href="/">SubPage 3</a></li>
							</ul>
						</li>
						<li><a href="/blog">Blog</a></li>
						<li class="has-submenu">
							<a href="/portfolio">Portfolio</a>
							<ul class="submenu">
								<li><a href="/">SubPage 4</a></li>
								<li><a href="/">SubPage 5</a></li>
								<li><a href="/">SubPage 6</a></li>
							</ul>
						</li>
						<li>
							<a class="button bg-gradient-accent-2 light" href="/contact">Contact</a
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>

<style>
	.outer {
		background-color: var(--color-blue);
	}

	.inner {
		padding-block: 1.5rem;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
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
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.has-submenu {
		position: relative;
	}

	.has-submenu:hover .submenu,
	.has-submenu:focus-within .submenu {
		display: grid;
	}

	.submenu {
		inline-size: max-content;
		position: absolute;
		left: -1rem;
		z-index: 1;
		display: none;
		padding: 1rem;
		background-color: var(--color-blue);
		border-radius: 0.5rem;
	}

	/* --- Mobile styles --- */
	@media (width < 48rem) {
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

		.submenu {
			display: grid;
			position: static;
		}

		/* Open state */
		.open {
			min-height: 100svh;
			grid-template-rows: 1fr;
			margin-top: 1rem;
		}
	}
</style>
