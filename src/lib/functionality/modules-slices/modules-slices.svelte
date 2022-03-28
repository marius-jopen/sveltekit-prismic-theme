<script>
	// Import all possible components which get used in the Slice module
	import HeadlineSimple from "$lib/modules-flex/headlines/headline-simple/headline-simple.svelte"
	import ParagraphRichtextBig from "$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte"
	import ParagraphRichtextSmall from "$lib/modules-flex/paragraphs/paragraph-richtext-small/paragraph-richtext-small.svelte"
	// Info Boxes
	// Repeating Content
	import TextImage from "$lib/modules-flex/paragraphs/text-image/text-image.svelte"
	import ImageFullWidth from "$lib/modules-flex/images/image-full-width/image-full-width.svelte"
	import ImageFullScreen from "$lib/modules-flex/images/image-full-screen/image-full-screen.svelte"
	import SliderComplex from '$lib/modules-flex/sliders/slider-complex/slider-complex.svelte'
    import SliderVideoFullInfo from '$lib/modules-flex/sliders/slider-video-full-info/slider-video-full-info.svelte'
	import SliderMarquee from "$lib/modules-flex/sliders/slider-marquee/slider-marquee.svelte"
	import SliderMouseMove from "$lib/modules-flex/sliders/slider-mouse-move/slider-mouse-move.svelte"
	// Slider Fullscreen Image
	// Slider Complex Vertical
	import GalleryListHover from "$lib/modules-flex/galleries/gallery-list-hover/gallery-list-hover.svelte"
	// Gallery List Overlay Slider
	import VideoSimple from "$lib/modules-flex/videos/video-simple/video-simple.svelte"
	import VideoControls from "$lib/modules-flex/videos/video-controls/video-controls.svelte"
	// NavigationFullBackground
	// Table Big

	// Get the data from the parent component
	export let slices

	// Connect each slice from Prismic to a component from above
	const sliceTypes = {
		headline_simple: HeadlineSimple,
		paragraph_richtext_big: ParagraphRichtextBig,
		paragraph_richtext_small: ParagraphRichtextSmall,
		image_full_width: ImageFullWidth,
		image_full_screen: ImageFullScreen,
		slider_complex: SliderComplex,
		slider_video_full_info: SliderVideoFullInfo,
		slider_marquee: SliderMarquee,
		slider_mouse_move: SliderMouseMove,
		text_image: TextImage,
		gallery_list_hover: GalleryListHover,
		video_simple: VideoSimple,
		video_controls: VideoControls,
	}
</script>

{#if slices}
	<div class="allSlices">
		{#each slices as slice}
			<div class="slice">
				<svelte:component this={sliceTypes[slice.slice_type]} {slice} />
			</div>
		{/each}
	</div>
{/if}