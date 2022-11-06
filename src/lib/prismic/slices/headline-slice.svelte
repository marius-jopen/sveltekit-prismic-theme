<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let text
	export let slice

	if(slice) {
		text = slice.primary.title_headline
	}
</script>

<Container classes="pb-4" >
	<Text field={text} classes="text-center" />
</Container>