<script>
	import './layout.css';
	import { onNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import NewHeader from '$lib/components/NewHeader.svelte';
	import SkipToMain from '$lib/components/SkipToMain.svelte';

	let { children } = $props();

	const navItems = [
		{ label: 'Home', href: '/' },
		{
			label: 'About',
			href: '/about',
			children: [
				{ label: 'SubPage 1', href: '/' },
				{ label: 'SubPage 2', href: '/' },
				{ label: 'SubPage 3', href: '/' }
			]
		},
		{ label: 'Blog', href: '/blog' },
		{
			label: 'Portfolio',
			href: '/portfolio',
			children: [
				{ label: 'SubPage 4', href: '/' },
				{ label: 'SubPage 5', href: '/' },
				{ label: 'SubPage 6', href: '/' }
			]
		}
	];
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<SkipToMain style="background-color: var(--color-white);" />

<div id="back-to-top" class="page-wrapper">
	<NewHeader items={navItems} />
	<main id="main">{@render children()}</main>
	<Footer />
</div>

<BackToTop scrollAmount="1000" />
