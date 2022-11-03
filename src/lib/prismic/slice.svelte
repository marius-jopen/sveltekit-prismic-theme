<script>
  import { dev } from "$app/environment"
	import Comment from "$lib/tools/comment.svelte"
	import ImageBox from "$lib/prismic/slices/image-slice.svelte"
	import TextBox from "$lib/prismic/slices/text-slice.svelte"
	import VideoBox from "$lib/prismic/slices/video-slice.svelte"

	export let slice

	const mappings = {
		image: ImageBox,
		text: TextBox,
		video: VideoBox
	}

  const missingSlice = (key) => !Object.keys(mappings).includes(key)
</script>

<div class="slice">
  <Comment comment={slice.slice_type} />

  <svelte:component this={mappings[slice.slice_type]} {slice} />

  {#if dev && missingSlice(slice.slice_type)}
    <pre>Missing module for {slice.slice_type}</pre>
  {/if}
</div>