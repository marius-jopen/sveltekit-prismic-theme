<script>
	import ItemBlogPost1 from "$lib/prismic/modules/item-blog-post/item-blog-post-1.svelte"
	import Container from "$lib/tools/container.svelte"

	export let items
</script>

<Container classesInner="px-4">
	<div>
		{#each items as item (item.item.uid)}
			<ItemBlogPost1 item={item.item} />
		{/each}
	</div>
</Container>