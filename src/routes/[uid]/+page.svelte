<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import Slices from "$lib/prismic/slices.svelte"

  export let data

  const { document, setup } = data
</script>

<Seo {document} {setup} />

<Container>
	<Text plain field={document.data.title} />
</Container>

<Slices slices={document.data.body} />