<script>
	import Seo from "$lib/prismic/seo.svelte";
  import Container from "$lib/tools/container.svelte";
	import Text from "$lib/prismic/text.svelte"

  export let data

  const { document, setup } = data
</script>

<Seo {document} {setup} />

<Container>
	<Text field={document.data.title} />
</Container>