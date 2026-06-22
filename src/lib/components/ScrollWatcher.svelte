<div></div>

<style>
  div {
    position: fixed;
    top: 0;
    width: 100%;
    height: 10px;
    background-color: var(--color-green-700);
    scale: 0 1;
    animation: scroll-watcher linear;
    animation-timeline: scroll();
    transform-origin: left;
  }

  @keyframes scroll-watcher {
    to {
      scale: 1 1;
    }
  }
</style>