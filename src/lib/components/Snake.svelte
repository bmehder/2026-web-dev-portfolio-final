<script>
	const GRID_SIZE = 20
	
	const arrayFrom = n => Array.from({ length: n })

	const rows = arrayFrom(GRID_SIZE).map(
		(_, y) => arrayFrom(GRID_SIZE).map(
			(_, x) => ({ x, y })
		)
	)

	const keyMap = {
		ArrowUp: "up",
		ArrowDown: "down",
		ArrowLeft: "left",
		ArrowRight: "right",
	}

	const opposites = {
		"up": "down",
		"down": "up",
		"left": "right",
		"right": "left",
	}

	const directions = {
		"up": { x: 0, y: -1},
		"down": { x: 0, y: 1 },
		"left": { x: -1, y: 0 },
		"right": { x: 1, y: 0 },
	}

	const isFood = cell => cell.x === food.x && cell.y === food.y

	const isPartOfSnake = cell => snake.some(
		snakePart => cell.x === snakePart.x && cell.y === snakePart.y
	)

	// State
	let food = $state({ x: 5, y: 5 })
	let snake = $state([
		{ x: 10, y: 10 }
	])
	let direction = $state("right")
	let isGameOver = $state(true)
	let interval = $state(250)

	const moveSnake = () => {
		// Guards
		if (isGameOver) return
		
		// Find snake head location
		const head = snake[0]
		
		// Determine the next head location
		const offset = directions[direction]
		
		// Make the next head
		const nextHead = { 
			x: head.x + offset.x,
			y: head.y + offset.y
		}

		// Wall Collision (guard)
		if (nextHead.x < 0 ||
				nextHead.y < 0 ||
				nextHead.x >= GRID_SIZE ||
				nextHead.y >= GRID_SIZE
		) {
			isGameOver = true
			return
		}

		// Snake Collision (guard)
		if (snake.some(
			snakePart => 
				nextHead.x === snakePart.x &&
				nextHead.y === snakePart.y
		)) {
			isGameOver = true
			return
		}

		// Food Collision
		if (nextHead.x === food.x && nextHead.y === food.y) {
			snake = [nextHead, ...snake]

			food = {
				x: Math.floor(Math.random() * GRID_SIZE),
				y: Math.floor(Math.random() * GRID_SIZE),
			}

			interval = interval - 10
			
      return
		}
		
		// Keep moving the snake (default)
			snake = [nextHead, ...snake.slice(0, -1)]
	}

	const handleKeydown = event => {
		const nextDirection = keyMap[event.key]

		if (nextDirection == null) return
		if (opposites[nextDirection] === direction) return

		direction = nextDirection
	}

	const reset = () => {
		food = { x: 5, y: 5 }
		snake = [{ x: 10, y: 10 }]
		direction = "right"
		isGameOver = false
    interval = 250
	}

	$effect(() => {
		const intervalId = setInterval(moveSnake, interval)
		
		return () => {
			clearInterval(intervalId)
		}
	})
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="snake-game">
	<div class="board">
		{#each rows as row}
			<div class="row">
				{#each row as cell}
					<div class={{
						cell: true,
						food: isFood(cell),
						snake: isPartOfSnake(cell)
					}}></div>
				{/each}
			</div>
		{/each}
	</div>

	<div>
		<p>Interval: {interval}ms</p>
		{#if isGameOver}
			<p>Game Over</p>
			<button onclick={reset}>New Game</button>
		{/if}
	</div>
</div>

<style>
	.snake-game {
    width: 400px;
		display: grid;
		gap: 1rem;
		text-align: center;
	}
	
	.board {
		background-color: white;
		color: black;
    border: 1px solid;
	}
	
	.row {
		display: flex;
	}
	
	.cell {
		width: 20px;
		height: 20px;
	}

	.food {
		background-color: tomato;
		border-radius: 50%;
	}

	.snake {
		background-color: seagreen;
	}
</style>