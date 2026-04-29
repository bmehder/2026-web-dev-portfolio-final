<script>
	import DarkLogo from '$lib/assets/logo-dark.svg'
	import Hamburger from '$lib/assets/icons/hamburger.svg'
	import Close from '$lib/assets/icons/close.svg'

	let isOpen = $state(false)

	const onclick = () => (isOpen = !isOpen)
</script>

<header>
	<div class="outer">
		<div class="inner">
			<div class="mobile-top flex space-between align-items-center gap-1-5">
				<div class="logo">
					<a href="/">
						<img src={DarkLogo} alt="logo" />
					</a>
				</div>
				<div class="mobile-trigger">
					{#if isOpen}
						<button {onclick}><img src={Close} alt="close icon" /></button>
					{:else}
						<button {onclick}><img src={Hamburger} alt="hamburger icon" /></button>
					{/if}
				</div>
			</div>
			<div class="mobile-bottom">
				{#if isOpen}
					<nav>
						<button onclick={() => isOpen = false}>
              <ul class="grid gap-1">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <a class="button bg-primary light justify-self-start" href="/contact"
                  >Contact Me</a
                >
              </ul>
            </button>
					</nav>
				{/if}
			</div>
		</div>
	</div>
</header>

<style>
	.inner {
		padding-block: 1.5rem;
	}

	.mobile-trigger button {
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
	}

	.mobile-trigger img {
		max-width: 3rem;
	}

  .mobile-bottom button {
    all: unset;
  }

	ul {
		padding: 0;
		list-style: none;
	}
</style>
