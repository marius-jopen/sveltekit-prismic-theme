<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let data

	const { document, setup } = data
</script>

<Seo {setup} {document} />

<Container classes='width-4xl py-4'>
	<Text plain field={document.data.title} />
</Container>