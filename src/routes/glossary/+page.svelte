<script>
	import Seo from "$lib/prismic/seo.svelte"
  import GlossaryIndex from "$lib/prismic/pages/glossary-index.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />
<GlossaryIndex {data} />