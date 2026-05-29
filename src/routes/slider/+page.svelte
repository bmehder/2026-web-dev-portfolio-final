<script>
	import Slider from '$lib/components/Slider.svelte'
	import { slide } from 'svelte/transition'

  let { data } = $props()
</script>

<section>
  <div class="outer">
    <Slider slides={data.slides} borderRadius="0" alignContent="center" />
  </div>
</section>

<section>
  <div class="outer">
    <div class="inner" style="width: min(100% - 3rem, 32rem);">
      <Slider slides={data.slides} />
    </div>
  </div>
</section>