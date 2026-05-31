<script>
	const dogsEndpoint = 'https://dog.ceo/api/breeds/image/random/'

	let dogs = $state([])
  let count = $state(1)

	const getDogs = event => {
    event?.preventDefault()

		return fetch(dogsEndpoint + count)
			.then(response => response.json())
			.then(data => (dogs = [...dogs, ...data.message]))
			.catch(err => console.error('Whoops:', err))
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

<div class="fetch-dogs grid gap-1-5">
  <form onsubmit={getDogs}>
    <label for="dogs">Count:</label>
    <input type="number" id="dogs" min="1" max="50" bind:value={count} >
    <button type="submit">Get Dogs</button>
    <button type="button" onclick={reset}>Reset</button>
    <button type="button" onclick={removeLast}>Remove Last</button>
  </form>

	<div class="grid auto-fill gap-1-5">
		{#each dogs as dog}
			<img src={dog} alt="" />
		{/each}
	</div>
</div>

<style>
  img {
    aspect-ratio: 1;
    object-fit: cover;
  }
</style>