<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte"
  import Projects from '$lib/prismic/modules-basic/projects.svelte'
  import Text from "$lib/prismic/atoms/text.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />

<Container saos='' paddingBottom='pb-0'>
	<Text classes="h4 text-center pb-8" plain field={document.data.title} />
	<Projects {document} />
</Container>