<script>
	import ImageFullWidth from "$lib/modulesFlex/images/ImageFullWidth/ImageFullWidth.svelte"
	import VideoSimple from "$lib/modulesFlex/videos/VideoSimple.svelte"
	import VideoControls from "$lib/modulesFlex/videos/VideoControls.svelte"
	import ParagraphRichtext from "$lib/modulesFlex/paragraphs/ParagraphRichtext.svelte"
	import FullPageBackground from "$lib/modulesFlex/navigations/FullPageBackground.svelte"
	import SliderMouseMove from "$lib/modulesFlex/sliders/SliderMouseMove/SliderMouseMove.svelte"
	import SliderMarquee from "$lib/modulesFlex/sliders/sliders/sliderMarquee/SliderMarquee.svelte"
	import SliderBasic from "$lib/modulesFlex/sliders/SliderBasic/SliderBasic.svelte"
	import SliderPanoramaText from "$lib/modulesFlex/sliders/sliders/sliderPanoramaText/SliderPanoramaTextLoop.svelte"

	export let slices

	const sliceTypes = {
		slider_basic: SliderBasic,
		slider_panorama_text: SliderPanoramaText,
		marquee: SliderMarquee,
		image_simple: ImageFullWidth,
		video_simple: VideoSimple,
		video_controls: VideoControls,
		paragraph_richtext: ParagraphRichtext,
		navigation_fullpage_background: FullPageBackground,
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