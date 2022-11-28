<script>
  import Link from "$lib/prismic/atoms/link.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
  import Container from "$lib/tools/container.svelte";

	export let item
</script>

<Container classesOuter="w-full">
	<Link document={item}>
		<Text classes="h3" plain field={item.data.title} />
	</Link>
</Container>