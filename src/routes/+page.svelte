<script>
	import AnimationIcon from '$lib/assets/icons/icon-animation.svg'
	import DesignIcon from '$lib/assets/icons/icon-design.svg'
	import PhotographyIcon from '$lib/assets/icons/icon-photography.svg'
	import CryptoIcon from '$lib/assets/icons/icon-crypto.svg'
	import BusinessIcon from '$lib/assets/icons/icon-business.svg'
	import Box from '$lib/components/Box.svelte'
	import Hero from '$lib/components/Hero.svelte'
	import HeadingBox from '$lib/components/HeadingBox.svelte'
</script>

<Hero></Hero>

<section>
	<div class="outer bg-background-neutral">
		<div class="inner grid auto-fill gap-3">
			<HeadingBox></HeadingBox>
			<Box
				icon={AnimationIcon}
				heading="Animation"
				description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
				href="/portfolio"
			></Box>
			<Box
				icon={DesignIcon}
				heading="Design"
				description="Create beautiful, usable interfaces to help shape the future of how the web looks."
				href="/"
			></Box>
			<Box
				icon={PhotographyIcon}
				heading="Photography"
				description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
				href="/"
			></Box>
			<Box
				icon={CryptoIcon}
				heading="Crypto"
				description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
				href="/"
			></Box>
			<Box
				icon={BusinessIcon}
				heading="Business"
				description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
				href="/"
			></Box>
		</div>
	</div>
</section>

<style>
	.inner {
		padding-block: 6rem;
	}
</style>
