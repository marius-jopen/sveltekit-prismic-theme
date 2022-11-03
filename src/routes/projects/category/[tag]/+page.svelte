<script>
	// import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import Link from "$lib/prismic/atoms/link.svelte"

	export let data

	const { setup, documents } = data
</script>

<!-- <Seo {setup} {document} /> -->

<Container>
	{#each documents as document}
		<Link document={document}>
			<Text plain field={document.data.title} />
		</Link>
	{/each}
</Container>