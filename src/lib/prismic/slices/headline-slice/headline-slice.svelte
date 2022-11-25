<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let text
	export let width = 'width-2xl'
	export let slice

	if(slice) {
		text = slice.primary.title_headline
		width = slice.primary.width_headline ? slice.primary.width_headline : width
	}
</script>

<Container classesInner="{width} pt-4 pb-8" >
	<Text field={text} classes="text-center" />
</Container>