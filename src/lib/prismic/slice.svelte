<script>
  import { dev } from "$app/environment"
	import Comment from "$lib/tools/comment.svelte"
	import TextBox from "$lib/prismic/slices/text-slice.svelte"
	import TextBox1 from "$lib/prismic/slices-extended/text-slice-1.svelte"
	import TextBox2 from "$lib/prismic/slices-extended/text-slice-2.svelte"
	import VideoBox from "$lib/prismic/slices/video-slice.svelte"
	import ImageBox from "$lib/prismic/slices/image-slice.svelte"
	import ImageBox1 from "$lib/prismic/slices-extended/image-slice-1.svelte"
	import Headline from "$lib/prismic/slices/headline-slice.svelte"
	import Headline1 from "$lib/prismic/slices-extended/headline-slice-1.svelte"
	import Gallery from "$lib/prismic/slices/gallery-slice.svelte"
	import TextListSlice from "$lib/prismic/slices/text-list-slice.svelte"
	import TextListSlice1 from "$lib/prismic/slices-extended/text-list-slice-1.svelte"
	import TextListSlice2 from "$lib/prismic/slices-extended/text-list-slice-2.svelte"

	export let slice

	const mappings = {
		image: ImageBox,
		image1: ImageBox1,
		text: TextBox,
		text1: TextBox1,
		text2: TextBox2,
		video: VideoBox,
		headline: Headline,
		headline1: Headline1,
		gallery: Gallery,
		text_list: TextListSlice,
		text_list1: TextListSlice1,
		text_list2: TextListSlice2
	}

  const missingSlice = (key) => !Object.keys(mappings).includes(key)
</script>

<div class="slice">
  <Comment comment={slice.slice_type} />

	{#if slice.slice_label == null}
  	<svelte:component this={mappings[slice.slice_type]} {slice} />
	{:else}
		<svelte:component this={mappings[slice.slice_type + slice.slice_label]} {slice} />
	{/if}

  {#if dev && missingSlice(slice.slice_type)}
    <pre>Missing module for {slice.slice_type}</pre>
  {/if}
</div>