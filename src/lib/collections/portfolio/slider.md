---
  title: Slider Component
  date: 2026-05-28
  excerpt: This is a slider component written in Svelte.
  image: placeholder-6.png
---

<script>
  import { slides } from "$lib/data.js"
  import Slider from "$lib/components/Slider.svelte"
</script>

<Slider {slides} />