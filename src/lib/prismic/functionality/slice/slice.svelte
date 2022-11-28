<script>
  import { dev } from "$app/environment"
	import Comment from "$lib/tools/comment.svelte"
	import Text from "$lib/prismic/slices/text-slice/text-slice.svelte"
	import Text1 from "$lib/prismic/slices/text-slice/text-slice-1.svelte"
	import Text2 from "$lib/prismic/slices/text-slice/text-slice-2.svelte"
	import Text3 from "$lib/prismic/slices/text-slice/text-slice-3.svelte"
	import Video from "$lib/prismic/slices/video-slice/video-slice.svelte"
	import Image from "$lib/prismic/slices/image-slice/image-slice.svelte"
	import Image1 from "$lib/prismic/slices/image-slice/image-slice-1.svelte"
	import Headline from "$lib/prismic/slices/headline-slice/headline-slice.svelte"
	import Headline1 from "$lib/prismic/slices/headline-slice/headline-slice-1.svelte"
	import Headline2 from "$lib/prismic/slices/headline-slice/headline-slice-2.svelte"
	import Gallery from "$lib/prismic/slices/gallery-slice/gallery-slice.svelte"
	import TextList from "$lib/prismic/slices/text-list-slice/text-list-slice.svelte"
	import TextList1 from "$lib/prismic/slices/text-list-slice/text-list-slice-1.svelte"
	import TextList2 from "$lib/prismic/slices/text-list-slice/text-list-slice-2.svelte"
	import Cta from "$lib/prismic/slices/cta-slice/cta-slice.svelte"
	import Cta1 from "$lib/prismic/slices/cta-slice/cta-slice-1.svelte"
	import Cta2 from "$lib/prismic/slices/cta-slice/cta-slice-2.svelte"
	import Downloads from "$lib/prismic/slices/downloads-slice/downloads-slice.svelte"
	import Embed from "$lib/prismic/slices/embed-slice/embed-slice.svelte"
	import Embed1 from "$lib/prismic/slices/embed-slice/embed-slice-1.svelte"
	import TextFeature from "$lib/prismic/slices/text-feature-slice/text-feature-slice.svelte"
	import TextFeature1 from "$lib/prismic/slices/text-feature-slice/text-feature-slice-1.svelte"

	export let slice

	const mappings = {
		image: Image,
		image1: Image1,
		text: Text,
		text1: Text1,
		text2: Text2,
		text3: Text3,
		video: Video,
		headline: Headline,
		headline1: Headline1,
		headline2: Headline2,
		gallery: Gallery,
		text_list: TextList,
		text_list1: TextList1,
		text_list2: TextList2,
		cta: Cta,
		cta1: Cta1,
		cta2: Cta2,
		embed: Embed,
		embed1: Embed1,
		downloads: Downloads,
		text_feature: TextFeature,
		text_feature1: TextFeature1
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