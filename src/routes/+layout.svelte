<script>
	import '$lib/style.css'
	import favicon from '$lib/assets/favicon.svg'
	import NewHeader from '$lib/components/NewHeader.svelte'
	import Footer from '$lib/components/Footer.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page-wrapper">
	<NewHeader></NewHeader>
	<main>{@render children()}</main>
	<Footer></Footer>
</div>