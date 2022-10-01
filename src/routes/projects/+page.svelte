<script>
	import Seo from "$lib/prismic/seo.svelte"

	export let data

	const { setup, document, projects } = data
</script>

<Seo {setup} {document} />