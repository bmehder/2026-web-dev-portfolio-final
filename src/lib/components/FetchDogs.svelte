<script>
	import Spinner from './Spinner.svelte'

	const dogsEndpoint = 'https://dog.ceo/api/breeds/image/random/'

	let dogs = $state([])
  let count = $state(1)
  let isLoading = $state(false)

	const getDogs = event => {
    event?.preventDefault()

    isLoading = true

		return fetch(dogsEndpoint + count)
			.then(response => response.json())
			.then(data => (dogs = [...dogs, ...data.message]))
			.catch(err => console.error('Whoops:', err))
      .finally(() => isLoading = false)
  }

  const reset = () => {
    dogs = []
    count = 1
  }

  const removeLast = () => {
    dogs = dogs.slice(0, -1)
  }

  getDogs()
</script>

<div class="fetch-dogs grid gap-6">
  <form onsubmit={getDogs}>
    <label for="dogs">Count:</label>
    <input type="number" id="dogs" min="1" max="50" bind:value={count} >
    <button type="submit">Get Dogs</button>
    <button type="button" onclick={reset}>Reset</button>
    <button type="button" onclick={removeLast}>Remove Last</button>
  </form>

	<div class="grid auto-fill gap-6">
		{#each dogs as dog}
			<img src={dog} alt="" />
		{/each}

    {#if isLoading}
      <Spinner />
    {/if}
	</div>
</div>

<style>
  img {
    aspect-ratio: 1;
    object-fit: cover;
  }
</style>