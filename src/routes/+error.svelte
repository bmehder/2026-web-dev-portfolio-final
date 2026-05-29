<script>
	import { page } from '$app/state'
	import PageTitle from '$lib/components/PageTitle.svelte'
</script>

<PageTitle title="Error" />

<section>
  <div class="outer">
    <div class="inner">{page.status}: {page.error.message}</div>
  </div>
</section>