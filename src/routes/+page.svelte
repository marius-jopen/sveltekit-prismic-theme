<script>
	import Seo from "$lib/prismic/seo.svelte"
  import HomeSingle from "$lib/prismic/pages/home-single.svelte"

	export let data

	const { document, setup } = data
</script>

<Seo {setup} {document} />
<HomeSingle {data} />