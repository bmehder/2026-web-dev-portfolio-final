---
  title: Gallery Component
  date: 2026-06-02
  excerpt: This is a Gallery component with thumbnail images.
  image: placeholder-1.png
---

<script>
  import { page } from "$app/state"
  import Gallery from "$lib/components/Gallery.svelte"
</script>

<Gallery images={page.data.gallery} />
