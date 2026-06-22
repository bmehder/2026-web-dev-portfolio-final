<script>
	let { title = 'Todo List', storageKey = null } = $props()

	let todos = $state([])
	let todoDraft = $state('')

	const loadTodos = () => {
		try {
			return JSON.parse(localStorage.getItem(storageKey) ?? '[]')
		} catch(err) {
			console.error(err)
			return []
		}
	}

	todos = loadTodos()

	const handleSubmit = event => {
		event.preventDefault()

		if (todoDraft.trim() !== '') {
			todos = [
				...todos,
				{
					task: todoDraft,
					id: new Date().getTime(),
					isCompleted: false,
				},
			]

			todoDraft = ''
		}
	}

	const handleDelete = (event, id) => {
		todos = todos.filter(todo => todo.id !== id)
	}

	const handleUpdate = (event, id) => {
		todos = todos.map(todo =>
			todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
		)
	}

	$effect(() => {
		if (typeof localStorage === 'undefined' || storageKey === null) {
			return
		}

		localStorage.setItem(storageKey, JSON.stringify(todos))
	})
</script>

<div class="todo-list">
	<h3>{title}</h3>

	<form onsubmit={handleSubmit}>
		<input type="text" bind:value={todoDraft} placeholder="Add new todo..." />
		<button type="submit">+</button>
	</form>

	<ul>
		{#each todos as todo}
			<li>
				<button
					class={{ 'update-btn': true, 'line-through': todo.isCompleted }}
					onclick={event => handleUpdate(event, todo.id)}
				>
					{todo.task}
				</button>

				<button class="delete-btn" onclick={event => handleDelete(event, todo.id)}>
					x
				</button>
			</li>
		{/each}
	</ul>

	<div class="todos-count">Number of todos: {todos.length}</div>
</div>

<style>
	.todo-list {
		padding: 1.5rem;
		border: 1px solid;
	}

	h3 {
		margin-top: 0;
	}

	form {
		display: grid;
		grid-template-columns: auto 4ch;
		gap: 0.25rem;
	}

	input {
		min-width: 0;
		padding: 0.5rem;
	}

	button {
		font: inherit;
		padding-inline: 1rem;
		background-color: var(--color-zinc-950);
		color: var(--color-white);
		border-radius: 0.5rem;
	}

	ul {
		padding: 0;
		list-style: none;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding-block: 0.25rem;
		color: unset;
	}

	.update-btn {
		padding: 0;
		background: none;
		color: inherit;
		border: none;
	}

	.todos-count {
		text-align: center;
	}

	.line-through {
		text-decoration: line-through;
	}
</style>
