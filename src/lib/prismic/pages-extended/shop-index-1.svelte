<script>
	import ItemsProduct1 from '$lib/prismic/modules-extended/items-product-1.svelte'

	export let data
</script>

<ItemsProduct1 items={data.filtered} />