<script>
	let { title = "Todo List" } = $props()
	
	let todos = $state([
		{task: "Learn", id: 0, isCompleted: false},
		{task: "Play", id: 1, isCompleted: true},
		{task: "Eat", id: 2, isCompleted: false}, 
	])
	let todoDraft = $state("")
	
	const handleSubmit = event => {
		event.preventDefault()

		if (todoDraft.trim() !== "") {
			todos = [
				...todos,
				{
					task: todoDraft,
					id: new Date().getTime(),
					isCompleted: false
				}
			]
	
			todoDraft = ''	
		}
	}

	const handleDelete = (event, id) => {
		todos = todos.filter(todo => todo.id !== id) 
	}

	const handleUpdate = (event, id) => {		
		todos = todos.map(
			todo => todo.id === id
				? {...todo, isCompleted: !todo.isCompleted}
				: todo
		)
	}

	$inspect(todoDraft)
	$inspect(todos)
</script>

<div class="todo-list">
	<h3>{title}</h3>
	
	<form onsubmit={handleSubmit}>
		<input 
			type="text"
			bind:value="{todoDraft}"
			placeholder="Add new todo..."
		/>
		<button type="submit">+</button>
	</form>

	<ul> 
		{#each todos as todo}
			<li>
				<button
					class={{"update-btn": true, "line-through": todo.isCompleted}}
					onclick={event => handleUpdate(event, todo.id)}
				>
					{todo.task}
				</button>
				
				<button
					class="delete-btn"
					onclick={event => handleDelete(event, todo.id)}
				>
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
		background-color: var(--color-blue);
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