<script>
	const GRID_SIZE = 20

	const arrayFrom = n => Array.from({ length: n })

	const rows = arrayFrom(GRID_SIZE).map((_, y) =>
		arrayFrom(GRID_SIZE).map((_, x) => ({ x, y })),
	)

	const keyMap = {
		ArrowUp: 'up',
		ArrowDown: 'down',
		ArrowLeft: 'left',
		ArrowRight: 'right',
	}

	const opposites = {
		up: 'down',
		down: 'up',
		left: 'right',
		right: 'left',
	}

	const directions = {
		up: { x: 0, y: -1 },
		down: { x: 0, y: 1 },
		left: { x: -1, y: 0 },
		right: { x: 1, y: 0 },
	}

	const isFood = cell => cell.x === food.x && cell.y === food.y

	const isPartOfSnake = cell =>
		snake.some(snakePart => cell.x === snakePart.x && cell.y === snakePart.y)

	// State
	let food = $state({ x: 5, y: 5 })
	let snake = $state([{ x: 10, y: 10 }])
	let direction = $state('right')
	let isGameOver = $state(true)
	let interval = $state(250)
	let score = $state(0)
	let highScore = $state(0)

	const reset = () => {
		food = { x: 5, y: 5 }
		snake = [{ x: 10, y: 10 }]
		direction = 'right'
		isGameOver = false
		interval = 250
		score = 0
	}

	if (typeof localStorage !== 'undefined') {
		highScore = Number(localStorage.getItem('snake-high-score')) ?? 0
	}

	const moveSnake = () => {
		if (isGameOver) return

		const head = snake[0]

		const offset = directions[direction]

		const nextHead = {
			x: head.x + offset.x,
			y: head.y + offset.y,
		}

		if (
			nextHead.x < 0 ||
			nextHead.y < 0 ||
			nextHead.x >= GRID_SIZE ||
			nextHead.y >= GRID_SIZE
		) {
			isGameOver = true
			return
		}

		if (
			snake.some(
				snakePart => nextHead.x === snakePart.x && nextHead.y === snakePart.y,
			)
		) {
			isGameOver = true
			return
		}

		if (nextHead.x === food.x && nextHead.y === food.y) {
			snake = [nextHead, ...snake]

			food = {
				x: Math.floor(Math.random() * GRID_SIZE),
				y: Math.floor(Math.random() * GRID_SIZE),
			}

			score = score + 1

			interval = interval - 10

			return
		}

		snake = [nextHead, ...snake.slice(0, -1)]
	}

	const handleKeydown = event => {
		const nextDirection = keyMap[event.key]

		if (nextDirection == null) return
		if (opposites[nextDirection] === direction) return

		direction = nextDirection
	}

	$effect(() => {
		const intervalId = setInterval(moveSnake, interval)

		return () => {
			clearInterval(intervalId)
		}
	})

	$effect(() => {
		if (typeof localStorage !== 'undefined' && score > highScore) {
			highScore = score
			localStorage.setItem('snake-high-score', score)
		}
	})
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="snake-game">
	<div class="board">
		{#each rows as row}
			<div class="row">
				{#each row as cell}
					<div
						class={{
							cell: true,
							food: isFood(cell),
							snake: isPartOfSnake(cell),
						}}
					></div>
				{/each}
			</div>
		{/each}
	</div>

	<div>
		<div class="flex items-center justify-center gap-6">
			<p>Score: {score}</p>
			<p>High Score: {highScore}</p>
			<p>Speed: {interval}ms</p>
		</div>
		{#if isGameOver}
			<p>Game Over</p>
			<button class="bg-primary bg-primary-hover light" onclick={reset}
				>New Game</button
			>
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
