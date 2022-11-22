<script>
	import ItemsProduct1 from '$lib/prismic/modules/items-product/items-product-1.svelte'

	export let data

	const { document} = data
</script>

<ItemsProduct1 items={data.filtered} />