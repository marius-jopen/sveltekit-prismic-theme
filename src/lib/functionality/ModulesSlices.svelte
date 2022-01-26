<script>
	import ImageSimple from "$lib/modulesFlex/images/ImageSimple.svelte"
	import VideoSimple from "$lib/modulesFlex/videos/VideoSimple.svelte"
	import VideoControls from "$lib/modulesFlex/videos/VideoControls.svelte"
	import ParagraphRichtext from "$lib/modulesFlex/paragraphs/ParagraphRichtext.svelte"
	import FullPageBackground from "$lib/modulesFlex/navigations/FullPageBackground.svelte"
	import MouseMoveLoop from "$lib/modulesFlex/galleries/mouseMove/MouseMoveLoop.svelte"
	import SliderMarquee from "$lib/modulesFlex/galleries/sliders/SliderMarquee.svelte"
	import SliderBasicLoop from "$lib/modulesFlex/galleries/sliders/sliderBasic/SliderBasicLoop.svelte"
	import SliderPanoramaText from "$lib/modulesFlex/galleries/sliders/sliderPanoramaText/SliderPanoramaTextLoop.svelte"

	export let slices

	const sliceTypes = {
		slider_basic: SliderBasicLoop,
		slider_panorama_text: SliderPanoramaText,
		marquee: SliderMarquee,
		image_simple: ImageSimple,
		video_simple: VideoSimple,
		video_controls: VideoControls,
		paragraph_richtext: ParagraphRichtext,
		navigation_fullpage_background: FullPageBackground,
		gallery_mouse_move: MouseMoveLoop
	}
</script>

<div class="allSlices">
	{#each slices as slice}
		<div class="slice">
			<svelte:component this={sliceTypes[slice.slice_type]} {slice} />
		</div>
	{/each}
</div>