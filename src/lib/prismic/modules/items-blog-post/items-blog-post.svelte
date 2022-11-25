<script>
	import ItemBlogPost from "$lib/prismic/modules/item-blog-post/item-blog-post.svelte"
	import Container from "$lib/tools/container.svelte"

	export let items
</script>

<Container classesInner="width-7xl">
	<div class="sm:flex flex-wrap">
		{#each items as item (item.item.uid)}
			<ItemBlogPost item={item.item} />
		{/each}
	</div>
</Container>