<script>
	import Seo from "$lib/prismic/seo.svelte"
	import Slices from "$lib/prismic/slices.svelte"

	export let data

	const { document, setup } = data
</script>

<Seo {setup} {document} />

<Slices slices={document.data.body} />