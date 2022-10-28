<script>
	import Seo from "$lib/prismic/seo.svelte";
  import Container from "$lib/tools/container.svelte";

  export let data

  const { document, setup } = data

	console.log(data)
</script>

<Seo {document} {setup} />

<Container>
	<div>
		PAGE
	</div>

	<div>
		ERROR: This page does not get the data from the current page
	</div>
</Container>