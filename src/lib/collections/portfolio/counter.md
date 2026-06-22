---
  title: Counter Component
  date: 2026-04-21
  excerpt: This is the classic Reactive User Interface (UI) example using a Svelte component.
  image: placeholder-5.png
---

<script>
  import Counter from "$lib/components/Counter.svelte"
</script>

## The Classic Counter Component

<p>This is one of the simplest components, and often, the first component people make.</p>

<Counter />

## The Code

```js
<script>
  let count = $state(0)

  const decrement = () => count = count - 1
  const increment = () => count = count + 1
</script>
```

```svelte
<div class="counter flex items-center">
  <button onclick={decrement}>-</button>
  <span>{count}</span>
  <button onclick={increment}>+</button>
</div>
```

```css
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
```