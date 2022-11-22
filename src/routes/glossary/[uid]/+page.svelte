<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
  import GlossarySingle from "$lib/prismic/pages/glossary-single/glossary-single.svelte"

  export let data

  const { setup, document } = data
</script>

{#key data}
	<Seo {setup} {document} />
	<GlossarySingle {data} />
{/key}