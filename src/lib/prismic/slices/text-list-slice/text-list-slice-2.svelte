<script>
	import Container from "$lib/tools/container.svelte"
  import TextList2 from "$lib/prismic/modules/text-list/text-list-2.svelte"
	import TextList3 from "$lib/prismic/modules/text-list/text-list-3.svelte"

	export let slice

	let textList = ''

	if(slice) {
		textList = slice.items
	}
</script>

<Container>
	<div class="sm:hidden">
		<TextList3 input={textList} />
	</div>

	<TextList2 input={textList} />
</Container>