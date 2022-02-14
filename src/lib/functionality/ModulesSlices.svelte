<script>
	import ImageFullWidth from "$lib/modulesFlex/images/ImageFullWidth/ImageFullWidth.svelte"
	import VideoSimple from "$lib/modulesFlex/videos/VideoSimple/VideoSimple.svelte"
	import VideoControls from "$lib/modulesFlex/videos/VideoControls/VideoControls.svelte"
	import ParagraphRichtextBig from "$lib/modulesFlex/paragraphs/ParagraphRichtextBig/ParagraphRichtextBig.svelte"
	import HeadlineSimple from "$lib/modulesFlex/headlines/HeadlineSimple/HeadlineSimple.svelte"
	import NavigationFullBackground from "$lib/modulesFlex/navigations/NavigationFullBackground/NavigationFullBackground.svelte"
	import SliderMouseMove from "$lib/modulesFlex/sliders/SliderMouseMove/SliderMouseMove.svelte"
	import SliderMarquee from "$lib/modulesFlex/sliders/SliderMarquee/SliderMarquee.svelte"
	import SliderBasic from "$lib/modulesFlex/sliders/SliderBasic/SliderBasic.svelte"
	import SliderPanorama from "$lib/modulesFlex/sliders/SliderPanorama/SliderPanorama.svelte"

	export let slices

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