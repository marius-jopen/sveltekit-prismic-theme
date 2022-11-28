<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
  import BlogSingle from "$lib/prismic/pages/blog-single/blog-single.svelte"
	import BlogSingle1 from "$lib/prismic/pages/blog-single/blog-single-1.svelte"

  export let data

  const { setup, document } = data
</script>

{#key data}
	<Seo {setup} {document} />
	<BlogSingle1 {data} />
{/key}