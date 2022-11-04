<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte";

	export let text
	export let centered = ''
	export let width = ''
	export let slice

	if(slice) {
		text = slice.primary.text_text
		centered = slice.primary.centered_text
		width = slice.primary.width_text
	}
</script>

<Container {width} >
	<Text field={text} classes="{centered ? 'text-center' : ''}" />
</Container>