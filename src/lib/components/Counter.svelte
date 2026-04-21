<script>
	let count = $state(0)

  const decrement = () => count = count - 1
  const increment = () => count = count + 1
</script>

<div class="counter flex align-items-center">
  <button onclick={decrement}>-</button>
	<span>{count}</span>
  <button onclick={increment}>+</button>
</div>

<style>
  button {
    background-color: var(--color-pink);
    color: var(--color-white);
    border: none;
  }

  button:focus-visible {
    outline-offset: 3px;
  }

  span {
    min-width: 6ch;
    font-family: monospace;
    text-align: center;
  }
</style>
