<script>
	// State
	let firsts = $state([])
	let seconds = $state([])
	let operator = $state(null)
	let result = $state(null)

	$inspect(firsts, operator, seconds, result)
	
	// Event Handlers
	const handleValue = event => {
		const value = event.target.value

		if (operator === null) {
			firsts = [...firsts, value]
		} else {
			seconds = [...seconds, value]
		}
	}
	
	const handleOperator = event => {
		operator = event.target.value
	}
	
	const handleMinus = event => {
		const value = event.target.value
		
		if (firsts.length === 0) {
			firsts = [...firsts, value]
			return
		}

		if (operator == null) {
			operator = value
			return
		}

		if (seconds.length === 0) {
			seconds = [...seconds, value]
			return
		}
	}
	
	const handleClear = event => {
		firsts = []
		seconds = []
		operator = null
		result = null
	}
	
	const handleEquals = event => {
		if (
			firsts.length == 0
			|| operator === null
			|| seconds.length === 0
		) return
		
		const a = Number(firsts.join(""))
		const b = Number(seconds.join(""))

		const calculations = {
			"+": a + b,
			"-": a - b,
			"x": a * b,
			"/": a / b,
		}

		result = calculations[operator]
	}

	const formatNumber = n => new Intl.NumberFormat().format(n)
</script>

<div class="calculator">
	<div class="display">
		{#if result != null }
			{formatNumber(result)}
		{:else}
			{firsts.join("")} {operator} {seconds.join("")}
		{/if}
	</div>
	
	<div class="buttons">
		<button class="clear-btn" onclick={handleClear}>Clear</button>
		
		<button value="7" onclick={handleValue}>7</button>
		<button value="8" onclick={handleValue}>8</button>
		<button value="9" onclick={handleValue}>9</button>
		<button value="/" onclick={handleOperator}>/</button>

		<button value="4" onclick={handleValue}>4</button>
		<button value="5" onclick={handleValue}>5</button>
		<button value="6" onclick={handleValue}>6</button>
		<button value="x" onclick={handleOperator}>x</button>

		<button value="1" onclick={handleValue}>1</button>
		<button value="2" onclick={handleValue}>2</button>
		<button value="3" onclick={handleValue}>3</button>
		<button value="-" onclick={handleMinus}>-</button>

		<button value="0" onclick={handleValue}>0</button>
		<button value="." onclick={handleValue}>.</button>
		<button value="=" onclick={handleEquals}>=</button>
		<button value="+" onclick={handleOperator}>+</button>
	</div>
</div>

<style>
	.calculator {
		width: 16rem;
		display: grid;
		gap: 0.5rem;
		padding: 0.5rem;
		background-color: var(--color-zinc-950);
		color: white;
		border-radius: 0.5rem;
	}

	.display {
		min-height: 5rem;
		display: grid;
		justify-content: end;
		align-items: end;
		padding: 0.5rem;
		background-color: #222;
		font-size: 1.5rem;
		word-break: break-all;
		border: 1px solid;
		border-radius: 0.5rem;
	}
	
	.buttons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.5rem;
	}

	.clear-btn {
		grid-column: 1 / -1;
	}

	button {
		padding: 0.75rem;
		border-radius: 0.5rem;
		border: none;
	}
</style>