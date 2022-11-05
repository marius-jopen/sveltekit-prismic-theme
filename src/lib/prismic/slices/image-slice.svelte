<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"

	export let text = ''
	export let width = 'width-2xl'
	export let src = ''
	export let slice

	if(slice) {
		src = slice.primary.image_image
		text = slice.primary.image_caption_image
		width = slice.primary.width_image
	}
</script>

<Container classes="{width} pb-4" >
	<Image {src} classes="rounded-3xl" />
	<Text field={text} classes="text-center" />
</Container>