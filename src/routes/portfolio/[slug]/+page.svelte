<script>
	import { formatDate } from '$lib/utils.js'

  let { data } = $props()

  let Post = $derived(data.post.component)
</script>

<svelte:head>
	<title>{data.post.meta.title} | Acme Corporation</title>
	<meta name="description" content={data.post.meta.excerpt}>
</svelte:head>

<article class="post">
  <div class="outer">
    <div class="inner">
      <div class="content">
        <a href="/portfolio">&laquo; Back to Portfolio</a>
        <div>
          <h1>{data.post.meta.title}</h1>
          <div class="date">{formatDate(data.post.meta.date)}</div>
        </div>
        <!-- <img src="/{data.post.meta.image}" alt=""> -->
        <div>
          <Post></Post>
        </div>
      </div>
    </div>
  </div>
</article>

<style>
  .content  {
    max-width: 65ch;
    display: grid;
    gap: 1.5rem;
  }

  /* img {
    max-width: 32rem;
  } */

  h1 {
    margin-bottom: 0;
  }

  .date {
    opacity: 0.6;
  }
</style>