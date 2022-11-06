<script>
	import Seo from "$lib/prismic/seo.svelte"
	import ProjectIndex from "$lib/prismic/pages/project-index.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />
<ProjectIndex {data} />