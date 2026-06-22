<script>
	import { formatDate } from '$lib/utils.js'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Card from '$lib/components/Card.svelte'

	let { data } = $props()
</script>

<PageTitle title="Portfolio"></PageTitle>

<section>
	<div class="outer">
		<div class="inner">
			<h2>All Items</h2>
			<div class="grid auto-fill gap-12">
				{#each data.posts as post}
					<Card
						image={post.meta.image}
						eyebrow={formatDate(post.meta.date)}
						title={post.meta.title}
						excerpt={post.meta.excerpt}
						href={"portfolio/" + post.slug}
					></Card>
				{/each}
			</div>
		</div>
	</div>
</section>
