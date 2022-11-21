<script>
	import Seo from "$lib/prismic/seo.svelte"
  import BlogSingle from "$lib/prismic/pages/blog-single.svelte"

  export let data

  const { setup, document } = data
</script>

{#key data}
	<Seo {setup} {document} />
	<BlogSingle {data} />
{/key}