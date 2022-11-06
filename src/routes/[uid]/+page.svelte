<script>
	import Seo from "$lib/prismic/seo.svelte"
  import PageSingle from "$lib/prismic/pages/page-single.svelte"
	import PageSingle1 from "$lib/prismic/pages-extended/page-single-1.svelte";

  export let data

  const { document, setup } = data
</script>

<Seo {document} {setup} />

<!-- <PageSingle {data} /> -->
<PageSingle1 {data} />