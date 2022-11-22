<script>
	import ItemGlossaryItem from "$lib/prismic/modules/item-glossary-item/item-glossary-item.svelte"
	import Container from "$lib/tools/container.svelte"

	export let items
</script>

<Container classes="width-7xl">
	<div class="sm:flex flex-wrap">
		{#each items as item (item.item.uid)}
			<ItemGlossaryItem item={item.item} />
		{/each}
	</div>
</Container>