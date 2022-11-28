<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
  import GlossarySingle from "$lib/prismic/pages/glossary-single/glossary-single.svelte"
	import GlossarySingle1 from "$lib/prismic/pages/glossary-single/glossary-single-1.svelte"

  export let data

  const { setup, document } = data
</script>

{#key data}
	<Seo {setup} {document} />
	<GlossarySingle1 {data} />
{/key}