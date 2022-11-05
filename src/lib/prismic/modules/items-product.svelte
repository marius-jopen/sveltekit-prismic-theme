<script>
	import ItemProduct from "$lib/prismic/modules/item-product.svelte"
	import Container from "$lib/tools/container.svelte"

	export let items
</script>

<Container classes="width-7xl">
	<div class="sm:flex flex-wrap">
		{#each items as item (item.item.uid)}
			<ItemProduct item={item.item} />
		{/each}
	</div>
</Container>