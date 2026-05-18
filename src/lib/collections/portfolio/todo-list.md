---
  title: TodoList Component
  date: 2026-04-21
  excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum eum impedit obcaecati quisquam quam?
  image: placeholder-1.png
---

<script>
  import TodoList from "$lib/components/TodoList.svelte"
</script>

## Heading 2

<p>This is some html.</p>

<div class="grid auto-fill gap-3">
  <TodoList storageKey="Personal" />
  <TodoList storageKey="Grocery" title="Grocery List" />
  <TodoList title="My List" />
</div>

<p>This is some html too.</p>