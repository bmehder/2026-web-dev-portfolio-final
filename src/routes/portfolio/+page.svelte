<script>
	import PageTitle from '$lib/components/PageTitle.svelte'

	let { data } = $props()

	$inspect(data)
</script>

<PageTitle title="Portfolio"></PageTitle>

<section>
	<div class="outer">
		<div class="inner">
    <h2>All Items</h2>
			{#each data.posts as post}
				<article>
					<h3><a href="/portfolio/{post.slug}">{post.meta.title}</a></h3>
				</article>
			{/each}
		</div>
	</div>
</section>
