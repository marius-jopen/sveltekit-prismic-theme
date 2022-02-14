<script>
	// Import all possible components which get used in the Slice module
	import ImageFullWidth from "$lib/modulesFlex/images/imageFullWidth/ImageFullWidth.svelte"
	import VideoSimple from "$lib/modulesFlex/videos/videoSimple/VideoSimple.svelte"
	import VideoControls from "$lib/modulesFlex/videos/videoControls/VideoControls.svelte"
	import ParagraphRichtextBig from "$lib/modulesFlex/paragraphs/paragraphRichtextBig/ParagraphRichtextBig.svelte"
	import HeadlineSimple from "$lib/modulesFlex/headlines/headlineSimple/HeadlineSimple.svelte"
	import NavigationFullBackground from "$lib/modulesFlex/navigations/navigationFullBackground/NavigationFullBackground.svelte"
	import SliderMouseMove from "$lib/modulesFlex/sliders/sliderMouseMove/SliderMouseMove.svelte"
	import SliderMarquee from "$lib/modulesFlex/sliders/sliderMarquee/SliderMarquee.svelte"
	import SliderBasic from "$lib/modulesFlex/sliders/sliderBasic/SliderBasic.svelte"
	import SliderPanorama from "$lib/modulesFlex/sliders/sliderPanorama/SliderPanorama.svelte"

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