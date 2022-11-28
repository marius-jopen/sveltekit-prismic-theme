<script>
  import Link from "$lib/prismic/atoms/link.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
  import Container from "$lib/tools/container.svelte";

	export let item
</script>

<Container classesOuter="w-full" classesInner="flex justify-center mb-6">
	<div class="button-1">
		<Link document={item}>
			<Text classes="text-center h3" plain field={item.data.title} />
		</Link>
	</div>
</Container>

<style lang="postcss">
	.button-1 {
		@apply w-fit bg-gradient-to-r from-red-200 to-blue-200 rounded-full px-8 py-2;
	}
</style>