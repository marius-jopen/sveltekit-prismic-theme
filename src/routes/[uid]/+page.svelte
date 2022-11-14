<script>
	import Seo from "$lib/prismic/seo.svelte"
  import PageSingle from "$lib/prismic/pages/page-single.svelte"
	import PageSingle1 from "$lib/prismic/pages-extended/page-single-1.svelte";

	export let data

  let { document, setup, uid } = data

  $: {
    document = data.document
    setup = data.setup
    uid = data.uid
  }
</script>

{#key uid}
  <Seo {document} {setup} />

  <PageSingle1 {data} />
{/key}