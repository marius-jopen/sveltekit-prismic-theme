<script>
	import ImageSimple from "$lib/modules/slices/images/imageSimple.svelte"
	import VideoSimple from "$lib/modules/slices/videos/videoSimple.svelte"
	import ParagraphRichtext from "$lib/modules/slices/paragraphs/paragraphRichtext.svelte"

	export let slices

	const sliceTypes = {
		image_simple: ImageSimple,
		video_simple: VideoSimple,
		paragraph_richtext: ParagraphRichtext
	}
</script>

<div class="allSlices">
	{#each slices as slice}
		<div class="slice">
			<svelte:component this={sliceTypes[slice.slice_type]} {slice} />
		</div>
	{/each}
</div>