---
  title: Slider Component
  date: 2026-05-28
  excerpt: This is a slider component written in Svelte.
  image: placeholder-6.png
---

<script>
  import { page } from "$app/state"
  import Slider from "$lib/components/Slider.svelte"

</script>

<Slider slides={page.data.slides} />

[View a full width slider](/slider).
