<script>
	let { pokemon } = $props()

	let info = $state(null)
	let error = $state(null)
	let isLoading = $state(false)

	$inspect(info)

	const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
	
	const loadPokemon = async () => {
		if (info || isLoading) { return }
		
		isLoading = true

		try {
			const response = await fetch(pokemon.url)

			if (!response.ok) {
				throw new Error("Failed to fetch a pokemon.")
			}

			const data = await response.json()

			info = data
		} catch (err) {
			error = err
		} finally {
			isLoading = false
		}
	}
</script>

<div class="pokemon-card">
	<details ontoggle={loadPokemon}>
		<summary>{capitalize(pokemon.name)}</summary> 
		
		<div class="details-content">
			{#if isLoading}
				<div>Loading...</div>
			{:else if error}
				<div>{error}</div>
			{:else if info}
				<img src={info.sprites.front_default} alt={pokemon.name} />
				
				<div>
					<strong>Height: {info.height}</strong>
				</div>
		
				<div>
					<strong>Weight: {info.weight}</strong>
				</div>
		
				<div>
					<strong>Types: {info.types.map(t => t.type.name).join(", ")}</strong>
				</div>
				
				<div>
					<strong>Abilities: {info.abilities.map(a => a.ability.name).join(", ")}</strong>
				</div>
			{/if}
			<!-- <pre>{JSON.stringify(info, null, 2)}</pre> -->
		</div>
	</details>
</div>

<style>
	details {
		padding-block: 0.5rem;
		padding-inline: 1rem;
		background-color: var(--color-zinc-950);
		color: var(--color-white);
		border-radius: 0.5rem;
	}

	.details-content {
		padding: 1rem;
	}

	img {
		block-size: 96px;
		inline-size: 96px;
	}
</style>