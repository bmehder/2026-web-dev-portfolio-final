<script>
  import DarkLogo from '$lib/assets/logo-dark.svg'
</script>

<header>
  <div class="outer">
    <div class="inner flex flex-wrap space-between align-items-center gap-1-5">
      <a href="/"><img src={DarkLogo} alt="dark logo"></a>
      <nav>
        <ul class="flex flex-wrap align-items-center gap-1-5">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <a class="button bg-primary light" href="/contact">Contact Me</a>
        </ul>
      </nav>
    </div>
  </div>
  
</header>

<style>
  .inner {
    padding-block: 1.5rem;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  .button:hover {
    text-decoration: none;
  }
</style>