<script>
	import { onNavigate } from '$app/navigation'
	import '$lib/style.css'
	import favicon from '$lib/assets/favicon.svg'
	import NewHeader from '$lib/components/NewHeader.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import BackToTop from '$lib/components/BackToTop.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="back-to-top" class="page-wrapper">
	<NewHeader></NewHeader>
	<main>{@render children()}</main>
	<Footer></Footer>
</div>

<BackToTop scrollAmount="1000"></BackToTop>

