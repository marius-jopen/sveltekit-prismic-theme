<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte";

	export let text
	export let centered = ''
	export let width = 'width-2xl'
	export let slice

	if(slice) {
		text = slice.primary.text_text
		centered = slice.primary.centered_text
		width = slice.primary.width_text ? slice.primary.width_text : width
	}
</script>

<Container classesOuter="pt-4 pb-6 border-b border-lines-1 px-4" classesInner="{width}" >
	<Text field={text} classes="{centered ? 'text-center' : ''}" />
</Container>