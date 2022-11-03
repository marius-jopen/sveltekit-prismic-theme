<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte";
  import Text from "$lib/prismic/text.svelte"

  export let data

  const { setup, document } = data
</script>

<Seo {setup} {document} />

<Container>
	<Text field={document.data.title} />
</Container>