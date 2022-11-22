<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
  import GlossaryIndex from "$lib/prismic/pages/glossary-index/glossary-index.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />
<GlossaryIndex {data} />