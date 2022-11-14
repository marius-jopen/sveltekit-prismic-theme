<script>
	import Seo from "$lib/prismic/seo.svelte"
	import ShopIndex from "$lib/prismic/pages/shop-index.svelte"
	import ShopIndex1 from "$lib/prismic/pages-extended/shop-index-1.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />
<!-- <ShopIndex {data} /> -->
<ShopIndex1 {data} />