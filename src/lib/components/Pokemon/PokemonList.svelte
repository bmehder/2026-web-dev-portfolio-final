<script>
	import PokemonCard from "./PokemonCard.svelte"
	
	const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=151'
	const badEndpoint = 'https://pokeapi.co/api/v2/pokemon/does-not-exist'

	let pokemon = $state([])
	let error = $state(null)
	let query = $state("")
	let isLoading = $state(true)

	let filteredPokemon = $derived(
		pokemon.filter(p => p.name.includes(query.toLowerCase())) 
	)

	$effect(() => {  
		// IIFE - Immediately Invoking Function Expression
		(async () => {
			try {
				const response = await fetch(endpoint)

				if (!response.ok) {
					throw new Error("Failed to fetch pokemon")
				}

				const data = await response.json()

				pokemon = data.results
			} catch (err) {
				error = err
			} finally {
				isLoading = false
			}
		})()
	})
	
</script>

<div class="pokemon-app">
	<search>
		<label for="search">Search Pokemon:</label>
		<input
			id="search"
			type="search"
			bind:value={query}
			placeholder="Try Bulbasaur, Ivysaur, Venusaur..."
		/>
	</search>

	<p>Showing {filteredPokemon.length} of {pokemon.length} results</p>
	
	{#if error}
		<p class="error">{error}</p>
	{:else if isLoading}
		<p>Loading...</p>
	{:else}
		<ul>
			{#each filteredPokemon as pokemon}
				<li><PokemonCard {pokemon} /></li>
			{:else}
				<p>No matches found.</p>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.pokemon-app {
		max-inline-size: 32rem;
	}
	
	search {
		display: grid;
		gap: 0.5rem;
	}

	ul {
		display: grid;
		gap: 0.5rem;
		padding: 0;
		list-style: none;
	}
	
	.error {
		color: tomato;
	}
</style>
