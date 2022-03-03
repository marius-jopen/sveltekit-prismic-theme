<script>
	// Import the video module
    import SliderVideoFull from '$lib/modules-flex/sliders/slider-video-full/slider-video-full.svelte'

	// Get data from parent component
	export let input
</script>

<!-- Top and fullscreen area -->
<div class="fixed z-0 w-full">
	<SliderVideoFull inputLoop={input.data.slider} />
</div>

<!-- Invisible and clickable area which is the full screen -->
<div class="h-screen pointer-events-none">
</div>

<div class="relative z-10 bg-white">
	CONTENT HERE
</div>