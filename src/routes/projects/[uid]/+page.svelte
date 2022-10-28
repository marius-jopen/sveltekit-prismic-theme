<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte";
  import { each } from "svelte/internal";

  export let data

  const { setup, document } = data

	console.log(data)
</script>

<Seo {setup} {document} />

<Container>
	<div>
		PROJECT
	</div>

	<div>
		ERROR: This page does not get the data from the current project
	</div>
</Container>