<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte";

	export let text
	export let bgColor = ''
	export let width = ''
	export let slice

	if(slice) {
		text = slice.primary.text_text
		width = slice.primary.width_text
	}
</script>

<Container {bgColor} {width} >
	<Text field={text} classes="text-xl" />
</Container>