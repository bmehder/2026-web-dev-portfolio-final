<script>
	import Slider from '$lib/components/Slider.svelte'

	let { data } = $props()
</script>

<section>
	<div class="outer">
		<Slider
			slides={data.slides}
			borderRadius="0"
			alignContent="center"
			padding="clamp(1.5rem, 14vw, 14rem)"
		/>
	</div>
</section>

<section>
	<div class="outer">
		<div class="inner" style="width: min(100% - 3rem, 32rem);">
			<Slider slides={data.slides} />
		</div>
	</div>
</section>
