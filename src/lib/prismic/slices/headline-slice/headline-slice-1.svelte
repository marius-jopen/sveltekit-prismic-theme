<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let text
	export let slice

	if(slice) {
		text = slice.primary.title_headline
	}
</script>

<Container classesInner="uppercase px-4 h-8 border-b border-lines-1 flex justify-center flex-col w-full" >
	<Text field={text} plain classes="text-center" />
</Container>