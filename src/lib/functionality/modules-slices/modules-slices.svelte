<script>
	// Import all possible components which get used in the Slice module
	import ImageFullWidth from "$lib/modules-flex/images/image-full-width/image-full-width.svelte"
	import ImageFullScreen from "$lib/modules-flex/images/image-full-screen/image-full-screen.svelte"

	import VideoSimple from "$lib/modules-flex/videos/video-simple/video-simple.svelte"
	import VideoControls from "$lib/modules-flex/videos/video-controls/video-controls.svelte"
	import ParagraphRichtextBig from "$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte"
	import HeadlineSimple from "$lib/modules-flex/headlines/headline-simple/headline-simple.svelte"
	import NavigationFullBackground from "$lib/modules-flex/navigations/navigation-full-background/navigation-full-background.svelte"
	import SliderMouseMove from "$lib/modules-flex/sliders/slider-mouse-move/slider-mouse-move.svelte"
	import SliderMarquee from "$lib/modules-flex/sliders/slider-marquee/slider-marquee.svelte"
	import SliderBasic from "$lib/modules-flex/sliders/slider-basic/slider-basic.svelte"
	import SliderPanorama from "$lib/modules-flex/sliders/slider-panorama/slider-panorama.svelte"

	// Get the data from the parent component
	export let slices

	// Connect each slice from Prismic to a component from above
	const sliceTypes = {
		image_full_width: ImageFullWidth,
		image_full_screen: ImageFullScreen,

		slider_basic: SliderBasic,
		slider_panorama_text: SliderPanorama,
		marquee: SliderMarquee,
		video_simple: VideoSimple,
		video_controls: VideoControls,
		paragraph_richtext: ParagraphRichtextBig,
		navigation_fullpage_background: NavigationFullBackground,
		gallery_mouse_move: SliderMouseMove,
		headline_simple: HeadlineSimple
	}
</script>

<div class="allSlices">
	{#each slices as slice}
		<div class="slice">
			<svelte:component this={sliceTypes[slice.slice_type]} {slice} />
		</div>
	{/each}
</div>