<script>
	import '$lib/style.css'
	import favicon from '$lib/assets/favicon.svg'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import MobileHeader from '$lib/components/MobileHeader.svelte'
	import MobileHeaderTest from '$lib/components/MobileHeaderTest.svelte'

	let { children } = $props()
	let innerWidth = $state()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:innerWidth />

<div class="page-wrapper">
	{#if innerWidth > 768}
		<Header></Header>
	{:else}
		<MobileHeaderTest></MobileHeaderTest>
	{/if}
	<main>{@render children()}</main>
	<Footer></Footer>
</div>