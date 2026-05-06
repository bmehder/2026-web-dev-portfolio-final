<script>
	let firsts = $state([])
	let operator = $state(null)
	let seconds = $state([])
	let result = $state(null)

	$inspect(firsts, operator, seconds, result)

	const addValue = event => {
		const value = event.target.value

		const activeValues = operator == null ? firsts : seconds

		if (value === "." && activeValues.includes(".")) return

		if (operator == null) {
			firsts = [...firsts, value]
		} else {
			seconds = [...seconds, value]
		}
	}
	
	const addOperator = event => {
		const value = event.target.value

		if (value === "-" && firsts.length === 0) {
			firsts = [...firsts, value]
			return
		}

		if (operator == null && value === "-") {
			operator = value
			return
		}

		if (value === "-" && seconds.length === 0) {
			seconds = [...seconds, value]
			return
		}

		operator = value
	}
	
	const calculate = (_) => {
		if (!firsts && !operator && !seconds) return
		
		const a = Number(firsts.join(""))
		const b = Number(seconds.join(""))

		const calculations = {
			"+" : a + b,
			"-" : a - b,
			"x" : a * b,
			"/" : a / b,
		}

		result = calculations[operator]
	}
	
	const clear = (_) => {
		firsts = []
		operator = null
		seconds = []
		result = null
	}

	const formatNumber = n =>
		new Intl.NumberFormat().format(
			parseFloat(n.toFixed(10))
		)
</script>

<div class="calculator">
	<div class="display">
		{#if result == null}
			{firsts.join("")} {operator} {seconds.join("")}
		{:else}
			{formatNumber(result)}
		{/if}
	</div>
	
	<div class="buttons">
		<button class="clear-btn" onclick={clear}>Clear</button>
		
		<button value="7" onclick={addValue}>7</button>
		<button value="8" onclick={addValue}>8</button>
		<button value="9" onclick={addValue}>9</button>
		<button value="/" onclick={addOperator}>/</button>

		<button value="4" onclick={addValue}>4</button>
		<button value="5" onclick={addValue}>5</button>
		<button value="6" onclick={addValue}>6</button>
		<button value="x" onclick={addOperator}>x</button>

		<button value="1" onclick={addValue}>1</button>
		<button value="2" onclick={addValue}>2</button>
		<button value="3" onclick={addValue}>3</button>
		<button value="-" onclick={addOperator}>-</button>

		<button value="0" onclick={addValue}>0</button>
		<button value="." onclick={addValue}>.</button>
		<button value="=" onclick={calculate}>=</button>
		<button value="+" onclick={addOperator}>+</button>
	</div>
</div>

<style>
	.calculator {
		width: 18rem;
		display: grid;
		gap: 0.5rem;
		padding: 0.5rem;
		background-color: black;
		color: white;
		border-radius: 0.5rem;
	}

	.display {
		min-height: 5rem;
		display: grid;
		justify-content: end;
		align-items: end;
		padding: 0.5rem;
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