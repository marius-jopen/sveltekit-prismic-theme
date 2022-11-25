<script>
  import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let data

	const { document} = data
</script>

<Container classesInner='width-4xl py-4'>
	<Text plain field={document.data.title} />
</Container>