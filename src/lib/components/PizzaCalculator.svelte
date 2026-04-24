<script>
  import { formatPrice } from '$lib/utils.js'

	let quantity = $state(2)
	let price = $state(12)
	let isDeliveryFee = $state(false)
	let tipPercentage = $state(10)

	let subtotal = $derived(quantity * price)
	let tipAmount = $derived(subtotal * (tipPercentage / 100))
  let deliveryFee = $derived(isDeliveryFee ? 5 : 0)
  let total = $derived(subtotal + tipAmount + deliveryFee)
</script>

<div class="pizza-calculator">
	<form>
		<div>
			<label for="quantity"># of Pizzas: {quantity}</label>
			<input type="range" id="quantity" min="1" max="50" bind:value={quantity} />
		</div>

		<div>
			<label for="price">Price: {formatPrice(price)}</label>
			<input type="range" id="price" bind:value={price} />
		</div>

		<label for="fee">
			<input type="checkbox" id="fee" bind:checked={isDeliveryFee} />
			Add $5 Delivery Fee?
		</label>

		<div>
			<label for="tip">Tip Percentage: {tipPercentage}%</label>
			<input type="range" id="tip" bind:value={tipPercentage} />
		</div>
	</form>

  <hr>

	<div>Subtotal: <strong>{formatPrice(subtotal)}</strong></div>

	<div>Tip Amount: <strong>{formatPrice(tipAmount)}</strong></div>

	<div>Delivery Fee? <strong>{formatPrice(deliveryFee)}</strong></div>

  <hr>

	<div>
		Total <strong>{formatPrice(total)}</strong>
	</div>
</div>

<style>
	.pizza-calculator {
		padding-block: 3rem;
		max-width: 24rem;
	}

	form {
		display: grid;
		gap: 1rem;
	}

	form div {
		display: grid;
	}

	input {
		padding: 0.5rem;
	}
</style>
