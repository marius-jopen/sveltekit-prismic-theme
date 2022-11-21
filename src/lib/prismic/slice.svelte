<script>
  import { dev } from "$app/environment"
	import Comment from "$lib/tools/comment.svelte"
	import Text from "$lib/prismic/slices/text-slice.svelte"
	import Text1 from "$lib/prismic/slices-extended/text-slice-1.svelte"
	import Text2 from "$lib/prismic/slices-extended/text-slice-2.svelte"
	import Video from "$lib/prismic/slices/video-slice.svelte"
	import Image from "$lib/prismic/slices/image-slice.svelte"
	import Image1 from "$lib/prismic/slices-extended/image-slice-1.svelte"
	import Headline from "$lib/prismic/slices/headline-slice.svelte"
	import Headline1 from "$lib/prismic/slices-extended/headline-slice-1.svelte"
	import Gallery from "$lib/prismic/slices/gallery-slice.svelte"
	import TextList from "$lib/prismic/slices/text-list-slice.svelte"
	import TextList1 from "$lib/prismic/slices-extended/text-list-slice-1.svelte"
	import TextList2 from "$lib/prismic/slices-extended/text-list-slice-2.svelte"
	import Cta from "$lib/prismic/slices/cta-slice.svelte"
	import Embed from "$lib/prismic/slices/embed-slice.svelte"

	export let slice

	const mappings = {
		image: Image,
		image1: Image1,
		text: Text,
		text1: Text1,
		text2: Text2,
		video: Video,
		headline: Headline,
		headline1: Headline1,
		gallery: Gallery,
		text_list: TextList,
		text_list1: TextList1,
		text_list2: TextList2,
		cta: Cta,
		embed: Embed
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