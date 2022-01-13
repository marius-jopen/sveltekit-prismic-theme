<script>
	import ImageSimple from "$lib/addons/slices/images/imageSimple.svelte"
	import VideoSimple from "$lib/addons/slices/videos/videoSimple.svelte"
	import ParagraphRichtext from "$lib/addons/slices/paragraphs/paragraphRichtext.svelte"

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