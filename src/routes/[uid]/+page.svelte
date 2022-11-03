<script>
	import Seo from "$lib/prismic/seo.svelte";
  import Container from "$lib/tools/container.svelte";
  import Text from "$lib/prismic/text.svelte"

  export let data

  const { document, setup } = data
</script>

<Seo {document} {setup} />

<Container>
	<div>
		<Text field={document.data.title} />
	</div>

	<div>
		This page works fine and displays the content from a default page
	</div>
</Container>