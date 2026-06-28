<script>
	let groups = $state([
		{
			id: 'todo',
			title: 'To Do',
      bgColor: 'blue',
			tasks: [
				{ id: 1, text: 'Plan homepage layout' },
				{ id: 2, text: 'Write blog post' },
			],
		},
		{
			id: 'progress',
			title: 'In Progress',
      bgColor: 'red',
			tasks: [{ id: 3, text: 'Build navigation menu' }],
		},
		{
			id: 'done',
			title: 'Done',
      bgColor: 'green',
			tasks: [{ id: 4, text: 'Choose color palette' }],
		},
		{
			id: 'review',
			title: 'To Review',
      bgColor: 'orange',
			tasks: [{ id: 5, text: 'This is a task' }],
			tasks: [{ id: 6, text: 'This is another task' }],
		},
	])

	let draggedTask = $state(null)

	const handleDragOver = event => {
		event.preventDefault()
	}

	const handleDragEnd = () => {
		draggedTask = null
	}

	const handleDragStart = (task, fromGroupId) => {
		draggedTask = { task, fromGroupId }
	}

	const handleDrop = toGroupId => {
		if (!draggedTask) return

		if (draggedTask.fromGroupId === toGroupId) {
			draggedTask = null
			return
		}

		groups = groups.map(group => {
			if (group.id === draggedTask.fromGroupId) {
				return {
					...group,
					tasks: group.tasks.filter(task => task.id !== draggedTask.task.id),
				}
			}

			if (group.id === toGroupId) {
				return {
					...group,
					tasks: [draggedTask.task, ...group.tasks],
				}
			}

			return group
		})

		draggedTask = null
	}
</script>

<div class="grid gap-4 auto-fill">
	{#each groups as group}
		<section
			class="grid content-start gap-2 p-4 rounded-xl bg-{group.bgColor}-700 text-white"
			aria-label={group.title}
			ondragover={handleDragOver}
			ondrop={() => handleDrop(group.id)}
		>
			<h2 class="text-xl font-semibold text-white">
				{group.title} ({group.tasks.length})
			</h2>

			<div class="grid gap-3">
				{#each group.tasks as task}
					<article
						class="p-4 rounded-lg shadow cursor-grab active:cursor-grabbing bg-zinc-800"
						draggable="true"
						ondragstart={() => handleDragStart(task, group.id)}
						ondragend={handleDragEnd}
					>
						{task.text}
					</article>
				{/each}
			</div>
		</section>
	{/each}
</div>
