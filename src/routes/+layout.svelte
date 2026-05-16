<script>
	import '$lib/style.css'
	import { fade } from 'svelte/transition'
	import favicon from '$lib/assets/favicon.svg'
	import upArrow from '$lib/assets/icons/up-arrow.svg'
	import NewHeader from '$lib/components/NewHeader.svelte'
	import Footer from '$lib/components/Footer.svelte'

	let { children } = $props()

	let scrollY = $state()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:scrollY />

<div id="page-wrapper" class="page-wrapper">
	<NewHeader></NewHeader>
	<main>{@render children()}</main>
	<Footer></Footer>
</div>

{#if scrollY > 1000}
	<a href="#page-wrapper" class="back-to-top" transition:fade>
		<img src={upArrow} alt="up arrow">
	</a>
{/if}

<style>
	.back-to-top {
		width: 2.5rem;
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		background-color: var(--color-white);
		border-radius: 50%;
	}

	.back-to-top:hover {
		outline: 1px solid var(--color-white);
	}
</style>
