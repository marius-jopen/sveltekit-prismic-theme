<script>
	import Seo from "$lib/prismic/seo.svelte"

  export let data

  const { setup, document } = data
</script>

<Seo {setup} {document} />
