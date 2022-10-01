<script>
	import Seo from "$lib/prismic/seo.svelte"
	import TextBox from "$lib/modules/text-box.svelte"
	import Image from "$lib/prismic/image.svelte"
	import Video from "$lib/tools/video/index.svelte"

	export let data

	const { document, setup } = data
</script>

<Seo {setup} {document} />

<div class="w-1/3">
	<Image src="{document.data.image.url}" alt="{document.data.image.alt}" />
</div>

<div class="w-1/3">
	<Video src='https://www.w3schools.com/html/mov_bbb.mp4' controls loop/>
	<Video src='https://www.w3schools.com/html/mov_bbb.mp4' autoplay loop/>
</div>

<TextBox text={'Width: width-xs'} bgColor='bg-neutral-100' width='width-xs' />
<TextBox text={'Width: width-sm'} bgColor='bg-neutral-200' width='width-sm' />
<TextBox text={'Width: width-md'} bgColor='bg-neutral-100' width='width-md' />
<TextBox text={'Width: width-lg'} bgColor='bg-neutral-200' width='width-lg' />
<TextBox text={'Width: width-xl'} bgColor='bg-neutral-100' width='width-xl' />
<TextBox text={'Width: width-2xl'} bgColor='bg-neutral-200' width='width-2xl' />
<TextBox text={'Width: width-3xl'} bgColor='bg-neutral-100' width='width-3xl' />
<TextBox text={'Width: width-4xl'} bgColor='bg-neutral-200' width='width-4xl' />
<TextBox text={'Width: width-5xl'} bgColor='bg-neutral-100' width='width-5xl' />
<TextBox text={'Width: width-6xl'} bgColor='bg-neutral-200' width='width-6xl' />
<TextBox text={'Width: width-7xl'} bgColor='bg-neutral-100' width='width-7xl' />
<TextBox text={'Width: full'} bgColor='bg-neutral-200' width='full' />
<TextBox text={'Width: screen'} bgColor='bg-neutral-100' width='screen' />
<TextBox text={'Width: undefined'} bgColor='bg-neutral-200'/>