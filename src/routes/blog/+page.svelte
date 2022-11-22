<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
  import BlogIndex from "$lib/prismic/pages/blog-index/blog-index.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />
<BlogIndex {data} />