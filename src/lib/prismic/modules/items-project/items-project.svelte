<script>
	import ItemProject from "$lib/prismic/modules/item-project/item-project.svelte"
	import Container from "$lib/tools/container.svelte"

	export let items
</script>

<Container classesInner="width-7xl">
	<div class="sm:flex flex-wrap">
		{#each items as item (item.item.uid)}
			<ItemProject item={item.item} />
		{/each}
	</div>
</Container>