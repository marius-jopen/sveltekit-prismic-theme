<script>
	import ImageSlice from "$lib/addons/slices/imageSlice.svelte";
	import VideoSlice from "$lib/addons/slices/videoSlice.svelte";
	import ParagraphSlice from "$lib/addons/slices/paragraphSlice.svelte";
	export let slices

	const sliceTypes = {
		image_slice: ImageSlice,
		video_slice: VideoSlice,
		paragraph_slice: ParagraphSlice
	}
</script>

<div class="allSlices">
	{#each slices as slice}
		<div class="slice">
			<svelte:component this={sliceTypes[slice.slice_type]} {slice}  />
		</div>
	{/each}
</div>