<script>
	import { beforeNavigate } from '$app/navigation'
	import LightLogo from '$lib/assets/logo-light.svg'
	import Hamburger from '$lib/assets/icons/hamburger.svg'
	import Close from '$lib/assets/icons/close.svg'

	let { items = [] } = $props()

	let mobileNav

	beforeNavigate(() => {
		mobileNav?.close()
	})
</script>

<header>
	<div class="outer">
		<div class="inner">
			<div class="layout">
				<a href="/" class="logo">
					<img src={LightLogo} alt="logo" />
				</a>

				<button
					class="mobile-trigger"
					commandfor="mobile-nav"
					command="show-modal"
					aria-label="Toggle navigation"
				>
					<img src={Hamburger} alt="Open menu" />
				</button>

				<nav class="desktop-nav">
					<ul>
						{#each items as item}
							<li class={{ 'has-submenu': item.children }}>
								<a href={item.href}>
									{item.label}
								</a>

								{#if item.children}
									<ul class="submenu">
										{#each item.children as child}
											<li>
												<a href={child.href}>
													{child.label}
												</a>
											</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}

						<li>
							<a class="button bg-teal-500-2 light" href="/contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>

<dialog id="mobile-nav" bind:this={mobileNav}>
	<nav class="mobile-nav">
		<button
			class="close-button"
			commandfor="mobile-nav"
			command="close"
			aria-label="Close navigation"
		>
			<img src={Close} alt="Close menu" />
		</button>

		<ul>
			{#each items as item}
				<li>
					<a href={item.href}>
						{item.label}
					</a>

					{#if item.children}
						<ul class="mobile-submenu">
							{#each item.children as child}
								<li>
									<a href={child.href}>
										{child.label}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}

			<li>
				<a class="button bg-teal-500-2 light" href="/contact"> Contact </a>
			</li>
		</ul>
	</nav>
</dialog>

<style>
	.outer {
		background-color: var(--color-zinc-950);
	}

	.inner {
		padding-block: 1.5rem;
	}

	.layout {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* Desktop Navigation */

	.desktop-nav > ul {
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

	.submenu {
		inline-size: max-content;
		position: absolute;
		inset-block-start: 100%;
		inset-inline-start: -1.5rem;
		z-index: 10;
		display: none;
		gap: 1rem;
		padding: 1.5rem;
		background: var(--color-zinc-950);
		border-radius: 0.5rem;
		list-style: none;
	}

	.has-submenu:hover .submenu,
	.has-submenu:focus-within .submenu {
		display: grid;
	}

	/* Mobile Trigger */

	.mobile-trigger {
		display: none;
		inline-size: 2rem;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
	}

	/* Mobile Popover */

	dialog {
		width: 100vw;
		min-block-size: 100svh;
		max-width: none;
		margin: 0;
		padding: 0;
		border: none;
	}

	.mobile-nav {
		min-block-size: 100svh;
		inline-size: 100%;
		padding: 1.5rem;
		background: var(--color-zinc-950);
		border: none;
	}

	.close-button {
		display: block;
		inline-size: 2rem;
		margin-inline-start: auto;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
	}

	.mobile-nav ul {
		display: grid;
		gap: 1rem;
		padding: 0;
		list-style: none;

		.mobile-submenu {
			padding: 1rem;
			padding-block-end: 0;
		}

		a {
			display: block;
		}

    .button {
      justify-self: start;
    }
	}

	/* Responsive */

	@media (width < 48rem) {
		.mobile-trigger {
			display: block;
		}

		.desktop-nav {
			display: none;
		}
	}
</style>
