<script>
	import Seo from "$lib/prismic/seo.svelte"
	import ProjectSingle from "$lib/prismic/pages/project-single.svelte"

  export let data

  const { setup, document } = data
</script>

<Seo {setup} {document} />
<ProjectSingle {data} />