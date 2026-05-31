---
  title: Accordion
  date: 2026-05-31
  excerpt: This is an Accordion component that animates opening and closing.
  image: placeholder-4.png
---

<script>
  import { page } from "$app/state"
  import Accordion from "$lib/components/Accordion.svelte"
</script>

{#each page.data.faqs as {title, content, name}}
  <Accordion {title} {name}>
    {content}
  </Accordion>
{/each}

