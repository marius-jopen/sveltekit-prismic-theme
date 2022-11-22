<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
	import ShopSingle from "$lib/prismic/pages/shop-single/shop-single.svelte"
	import ShopSingle1 from "$lib/prismic/pages/shop-single/shop-single-1.svelte"

  export let data

  const { setup, document } = data
</script>

{#key data}
	<Seo {setup} {document} />
	<ShopSingle {data} />
	<!-- <ShopSingle1 {data} /> -->
{/key}