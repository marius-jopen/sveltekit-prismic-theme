<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte";
  import Text from "$lib/prismic/text.svelte"

  export let data

  const { setup, document } = data
</script>

<Seo {setup} {document} />

<Container>
	<div>
    <Text field={document.data.title} />
	</div>

	<div>
		This page works fine and displays the content from a single page
	</div>
</Container>