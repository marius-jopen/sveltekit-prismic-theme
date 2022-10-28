<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte";

	export let data

	const { document, setup } = data
</script>

<Seo {setup} {document} />

<Container>
	<div>
		{document.data.title}
	</div>

	<div>
		This page works fine and displays the content from the home page
	</div>
</Container>