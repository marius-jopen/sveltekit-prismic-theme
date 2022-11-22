<script>
	import Container from "$lib/tools/container.svelte"
	import TextList from "$lib/prismic/modules/text-list/text-list.svelte"
  import TextList1 from "$lib/prismic/modules/text-list/text-list-1.svelte"

	export let slice

	let textList = ''

	if(slice) {
		textList = slice.items
	}
</script>

<Container>
	<div class="sm:hidden">
		<TextList input={textList} />
	</div>

	<TextList1 input={textList} />
</Container>