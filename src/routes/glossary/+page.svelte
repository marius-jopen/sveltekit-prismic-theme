<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
  // import GlossaryIndex from "$lib/prismic/pages/glossary-index/glossary-index.svelte"
	import GlossaryIndex1 from "$lib/prismic/pages/glossary-index/glossary-index-1.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />
<!-- <GlossaryIndex {data} /> -->
<GlossaryIndex1 {data} />