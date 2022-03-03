<script>
	// Import all possible components which get used in the Slice module
	import ImageFullWidth from "$lib/modules-flex/images/image-full-width/image-full-width.svelte"
	import ImageFullScreen from "$lib/modules-flex/images/image-full-screen/image-full-screen.svelte"
	import ParagraphRichtextBig from "$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte"
	import HeadlineSimple from "$lib/modules-flex/headlines/headline-simple/headline-simple.svelte"
	import SliderComplex from '$lib/modules-flex/sliders/slider-complex/slider-complex.svelte'
    import SliderVideoFull from '$lib/modules-flex/sliders/slider-video-full/slider-video-full.svelte'
	import TextImage from "$lib/modules-flex/paragraphs/text-image/text-image.svelte"


	import VideoSimple from "$lib/modules-flex/videos/video-simple/video-simple.svelte"
	import VideoControls from "$lib/modules-flex/videos/video-controls/video-controls.svelte"
	import SliderMouseMove from "$lib/modules-flex/sliders/slider-mouse-move/slider-mouse-move.svelte"
	import SliderMarquee from "$lib/modules-flex/sliders/slider-marquee/slider-marquee.svelte"


	// Get the data from the parent component
	export let slices

	// Connect each slice from Prismic to a component from above
	const sliceTypes = {
		image_full_width: ImageFullWidth,
		image_full_screen: ImageFullScreen,
		paragraph_richtext_big: ParagraphRichtextBig,
		headline_simple: HeadlineSimple,
		slider_complex: SliderComplex,
		slider_video_full: SliderVideoFull,
		text_image: TextImage,

		marquee: SliderMarquee,
		video_simple: VideoSimple,
		video_controls: VideoControls,
		gallery_mouse_move: SliderMouseMove
	}
</script>

<div class="allSlices">
	{#each slices as slice}
		<div class="slice">
			<svelte:component this={sliceTypes[slice.slice_type]} {slice} />
		</div>
	{/each}
</div>