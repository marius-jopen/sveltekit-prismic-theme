<script>
	// Import all possible components which get used in the Slice module
	import ImageFullWidth from "$lib/modules-flex/images/image-full-width/ImageFullWidth.svelte"
	import VideoSimple from "$lib/modules-flex/videos/video-simple/VideoSimple.svelte"
	import VideoControls from "$lib/modules-flex/videos/video-controls/VideoControls.svelte"
	import ParagraphRichtextBig from "$lib/modules-flex/paragraphs/paragraph-richtext-big/ParagraphRichtextBig.svelte"
	import HeadlineSimple from "$lib/modules-flex/headlines/headline-simple/HeadlineSimple.svelte"
	import NavigationFullBackground from "$lib/modules-flex/navigations/navigation-full-background/NavigationFullBackground.svelte"
	import SliderMouseMove from "$lib/modules-flex/sliders/slider-mouse-move/SliderMouseMove.svelte"
	import SliderMarquee from "$lib/modules-flex/sliders/slider-marquee/SliderMarquee.svelte"
	import SliderBasic from "$lib/modules-flex/sliders/slider-basic/SliderBasic.svelte"
	import SliderPanorama from "$lib/modules-flex/sliders/slider-panorama/SliderPanorama.svelte"

	// Get the data from the parent component
	export let slices

	// Connect each slice from Prismic to a component from above
	const sliceTypes = {
		slider_basic: SliderBasic,
		slider_panorama_text: SliderPanorama,
		marquee: SliderMarquee,
		image_simple: ImageFullWidth,
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