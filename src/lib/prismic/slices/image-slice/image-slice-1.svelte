<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"
	import { vhMinusHeader } from '$lib/prismic/functionality/stores'

	export let text = ''
	export let width = 'width-2xl'
	export let src = ''
	export let slice

	if(slice) {
		src = slice.primary.image_image
		text = slice.primary.image_caption_image
		width = slice.primary.width_image ? slice.primary.width_image : width
	}

	let height

	vhMinusHeader.subscribe(value => {
		height = value
	})
</script>

{#if height}
	<div class="border-b border-lines-1">
		<Container saos="" classes="border-b border-red-300 relative w-full" styles="height: {height}px">
			<div class="w-full top-0 left-0 absolute z-10 flex flex-col text-white justify-center" style="height: {height}px">
				<Text field={text} classes="text-center" />
			</div>

			<Image {src} classes="w-full {height} z-0 object-cover" styles="height: {height}px"/>
		</Container>
	</div>
{/if}