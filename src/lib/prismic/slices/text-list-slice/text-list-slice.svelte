<script>
	import Container from "$lib/tools/container.svelte"
  import TextList from "$lib/prismic/modules/text-list/text-list.svelte"

	export let slice
	export let width = 'width-2xl'

	let textList = ''

	if(slice) {
		textList = slice.items
		width = slice.primary.width_text_list ? slice.primary.width_text_list : width
	}
</script>

<Container classesInner="{width} pt-4 pb-8" >
	<TextList input={textList} />
</Container>