<script>
	import Seo from "$lib/prismic/seo.svelte"

	export let setup
	export let document
</script>

<Seo setup={setup.data} document={document.data} />
