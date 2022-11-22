<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
	import ProjectIndex from "$lib/prismic/pages/project-index/project-index.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />
<ProjectIndex {data} />