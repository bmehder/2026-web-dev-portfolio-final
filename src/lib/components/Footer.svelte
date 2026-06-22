<script>
	import LightLogo from '$lib/assets/logo-light.svg'
</script>

<!-- <footer>
  <div class="outer bg-zinc-500">
    <div class="inner flex flex-wrap space-between align-items-center gap-1-5">
      <a href="/"><img src={LightLogo} alt="light logo"></a>
      <a class="button bg-teal-500-2 light" href="/contact">Contact Me</a>
    </div>
  </div>
</footer> -->

<footer>
	<div class="outer bg-zinc-950 text-zinc-100">
		<div class="inner">
			<section>
				<h2 class="text-white">Acme Corporation</h2>

				<p class="text-white">
					Building modern digital experiences for startups, small businesses, and
					creative teams.
				</p>

				<a class="button bg-teal-500-2 light" href="/contact">
					Start a Project
				</a>

				<p class="text-white">© {new Date().getFullYear()} Acme Corporation</p>
			</section>

			<nav>
				<h2 class="text-white">Navigation</h2>

				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/portfolio">Portfolio</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>

			<section>
				<h2 class="text-white">Connect</h2>

				<ul>
					<li>
						<a href="https://github.com/bmehder/2026-web-dev-portfolio-final" target="_blank">GitHub</a>
					</li>

					<li>
						<a href="/">LinkedIn</a>
					</li>

					<li>
						<a href="/">Twitter</a>
					</li>
				</ul>
			</section>
		</div>
	</div>
</footer>

<style>
	.inner {		
		@media (width > 48rem) {
			display: grid;
			grid-template-columns: 2fr 1fr 1fr;
			gap: 3rem;
		}
	}

	/* h2, p {
		color: var(--color-white);
	} */
</style>