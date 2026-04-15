<script>
  let { icon, heading, description, href } = $props()
</script>

<div class="bg-light">
  <img src={icon} alt="">
  <h3>{heading}</h3>
  <p class="neutral">{description}</p>
  <a {href}>Get Started</a>
</div>

<style>
  div {
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem;
    border-radius: 1rem;
  }

  img {
    position: absolute;
    top: -1.5rem;
    left: 1.5rem;
    width: 3rem;
  }

  h3 {
    margin-bottom: 0;
  }

  a {
    font-size: 1.125rem;
    font-weight: bold;
  }
</style>