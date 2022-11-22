<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
  import PageSingle from "$lib/prismic/pages/page-single/page-single.svelte"
	import PageSingle1 from "$lib/prismic/pages/page-single/page-single-1.svelte";

	export let data

	$: data

	const { document, setup } = data
</script>

{#key data}
	<Seo {document} {setup} />
	<!-- <PageSingle {data} /> -->
	<PageSingle1 {data} />
{/key}