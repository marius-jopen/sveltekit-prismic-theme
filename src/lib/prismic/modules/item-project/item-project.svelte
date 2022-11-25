<script>
  import Link from "$lib/prismic/atoms/link.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"
  import Container from "$lib/tools/container.svelte";

	export let item
</script>

<Container classesOuter="sm:w-1/2 lg:w-1/3 px-4 pb-8">
	<Link document={item}>
		<Image src={item.data.thumbnail} classes="rounded-3xl mb-2 hover:scale-[1.01] transition-transform" />
		<Text classes="text-center" plain field={item.data.title} />
	</Link>
</Container>