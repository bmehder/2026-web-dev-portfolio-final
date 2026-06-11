<script>
	let container

	const createPlume = (event) => {
		const div = document.createElement('div')
		div.classList.add('plume')
		div.style.top = event.clientY + "px"
		div.style.left = event.clientX + "px"
		
		container.appendChild(div)
		
		div.addEventListener('animationend', () => { div.remove() })
	}
</script>

<svelte:window onmousemove={createPlume} />

<div bind:this={container} id="container"></div>
 
<style>
	#container {
		min-block-size: 100svh;
		margin: 0;
		/* background-color: black; */
	}

	:global(.plume) {
		position: fixed;
		inline-size: 10px;
		block-size: 10px;
		background-image: radial-gradient(circle, rebeccapurple, transparent 80%);
		animation: billow 1s ease-in forwards;
	}

	@keyframes billow {
		to {
			transform: scale(10) translateY(-10px);
			opacity: 0;
		}
	}
</style>
