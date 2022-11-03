<script>
	// import Seo from "$lib/prismic/seo.svelte"
  // import Container from "$lib/tools/container.svelte";
  import Text from "$lib/prismic/text.svelte"

	export let data

	const { setup, documents } = data

</script>

<!-- <Seo {setup} {document} /> -->

{#each documents as document}
  <Text field={document.data.title} />
{/each}

<!-- <Container>
	<div>
		Selected Category
	</div>

	<div>
		ERROR: This page does not get the data from the current category. The categories are put in manually.
	</div>

	<div class="pt-2">
		Categories
		<a href="/projects/category/blue" class="block">
			Blue
		</a>

		<a href="/projects/category/brown" class="block">
			Brown
		</a>

		<a href="/projects/category/pink" class="block">
			Pink
		</a>
	</div>
</Container> -->