<script>
	import ItemProduct1 from "$lib/prismic/modules-extended/item-product-1.svelte"
	import Container from "$lib/tools/container.svelte"

	export let items
</script>

<Container pt='pt-0 -ml-[1px] w-[100.3vw]' width='screen'>
	<div class="sm:flex flex-wrap border-r">
		{#each items as item (item.item.uid)}
			<ItemProduct1 item={item.item} />
		{/each}
		{#each items as item (item.item.uid)}
			<ItemProduct1 item={item.item} />
		{/each}
	</div>
</Container>