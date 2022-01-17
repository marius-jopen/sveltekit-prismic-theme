<script>
	import ImageSimple from "$lib/modules/slices/images/imageSimple.svelte"
	import VideoSimple from "$lib/modules/slices/videos/videoSimple.svelte"
	import VideoControls from "$lib/modules/slices/videos/videoControls.svelte"
	import ParagraphRichtext from "$lib/modules/slices/paragraphs/paragraphRichtext.svelte"
	import fullPageBackground from "$lib/modules/slices/navigations/fullPageBackground.svelte"
	import mouseMoveLoop from "$lib/modules/slices/galleries/mouseMove/mouseMoveLoop.svelte"
	import Marquee from "$lib/modules/slices/galleries/sliders/sliderMarquee.svelte"

	export let slices

	const sliceTypes = {
		marquee: Marquee,
		image_simple: ImageSimple,
		video_simple: VideoSimple,
		video_controls: VideoControls,
		paragraph_richtext: ParagraphRichtext,
		navigation_fullpage_background: fullPageBackground,
		gallery_mouse_move: mouseMoveLoop
	}
</script>

<div class="allSlices">
	{#each slices as slice}
		<div class="slice">
			<svelte:component this={sliceTypes[slice.slice_type]} {slice} />
		</div>
	{/each}
</div>