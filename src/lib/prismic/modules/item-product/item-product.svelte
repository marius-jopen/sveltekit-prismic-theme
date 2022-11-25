<script>
  import Link from "$lib/prismic/atoms/link.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"
  import Container from "$lib/tools/container.svelte"
	import Price from '$lib/prismic/modules/price/price.svelte'

	export let item
</script>

<Container classesOuter="sm:w-1/2 lg:w-1/3 px-4 pb-8">
	<Link document={item}>
		<Image src={item.data.thumbnail} classes="rounded-3xl mb-2 hover:scale-[1.01] transition-transform" />

		<Text classes="text-center" plain field={item.data.title} />

		<div class="text-center flex gap-1 justify-center">
			<Price {item} />

			{#if item.data.few_pieces_left}
				Few Pieces Left
			{/if}

			{#if item.data.on_sale}
				On Sale
			{/if}
		</div>
	</Link>
</Container>