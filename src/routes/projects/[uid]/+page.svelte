<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte";
  import { each } from "svelte/internal";

  export let data

  const { setup, document } = data
</script>

<Seo {setup} {document} />

<Container>
	<div>
		{document.data.title}
	</div>

	<div>
		This page works fine and displays the content from a single page
	</div>
</Container>