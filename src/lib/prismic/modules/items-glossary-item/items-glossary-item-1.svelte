<script>
	import ItemGlossaryItem1 from "$lib/prismic/modules/item-glossary-item/item-glossary-item-1.svelte"
	import Container from "$lib/tools/container.svelte"

	export let items
</script>

<Container classesInner="width-7xl">
	<div class="sm:flex flex-wrap">
		{#each items as item (item.item.uid)}
			<ItemGlossaryItem1 item={item.item} />
		{/each}
	</div>
</Container>