<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Embed from "$lib/prismic/atoms/embed.svelte"

	export let caption = ''
	export let embedCode = ''
	export let width = 'width-full'
	export let slice

	if(slice) {
		caption = slice.primary.caption_embed
		embedCode = slice.primary.embed_code_embed
		width = slice.primary.width_embed ? slice.primary.width_embed : width
	}
</script>

<Container classesInner="{width} pt-4 pb-8 px-8" >
	<Embed {embedCode} classes="rounded-2xl" />

	<Text field={caption} classes="pt-2" />
</Container>