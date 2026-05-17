<script>
  import { fade } from 'svelte/transition'
  import UpArrow from "$lib/assets/icons/up-arrow.svg"

  let scrollY = $state()

  let { scrollAmount = 1000 } = $props()
</script>

<svelte:window bind:scrollY />

{#if scrollY > scrollAmount}  
  <a href="#back-to-top" transition:fade>
    <img src={UpArrow} alt="back to top">
  </a>
{/if}

<style>
  a {
    width: 3rem;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    background-color: var(--color-white);
    border-radius: 50%;
    border: 1px solid var(--color-white);
  }

  a:hover {
    outline: 1px solid var(--color-white);
  }
</style>