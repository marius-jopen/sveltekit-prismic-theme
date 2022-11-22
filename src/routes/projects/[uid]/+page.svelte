<script>
	import Seo from "$lib/prismic/functionality/seo.svelte"
	import ProjectSingle from "$lib/prismic/pages/project-single/project-single.svelte"

  export let data

  const { setup, document } = data
</script>

{#key data}
	<Seo {setup} {document} />
	<ProjectSingle {data} />
{/key}