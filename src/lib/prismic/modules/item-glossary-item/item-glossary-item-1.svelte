<script>
  import Link from "$lib/prismic/atoms/link.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
  import Container from "$lib/tools/container.svelte";

	export let item
</script>

<Container classesOuter="w-full" classesInner="flex justify-center mb-6">
	<div class="button-1">
		<Link document={item}>
			<Text classes="text-center" plain field={item.data.title} />
		</Link>
	</div>
</Container>