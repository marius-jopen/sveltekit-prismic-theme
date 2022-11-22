<script>
  import Link from "$lib/prismic/atoms/link.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"
  import Container from "$lib/tools/container.svelte"
	import Price from "$lib/prismic/modules/price/price.svelte"

	export let item
</script>

<Container saos="" classes="sm:w-1/2 lg:w-1/3 border-b border-lines-1 text-white border-l" pt='pt-0' pb='pb-0' width='screen'>
	<Link document={item}>
		<div class="relative">
				<Text plain field={item.data.title} classes="absolute top-3 right-4 z-20 p1 text-xs pointer-events-none" />

				<div class="absolute bottom-3 right-4 z-20 p1 text-xs pointer-events-none">
					<Price {item} />
				</div>

				<div class="absolute bottom-3 left-4 z-20 p1 text-xs pointer-events-none">
					{#if item.data.few_pieces_left}
						Few Pieces Left
					{/if}

					{#if item.data.on_sale}
						On Sale
					{/if}
				</div>

				<Image src={item.data.thumbnail} classes='h-[130vw] sm:h-[70vw] lg:h-[37vw] object-cover' />

				<div class="transition opacity-0 hover:opacity-100 absolute z-10 top-0 left-0 w-full">
					<Image src={item.data.thumbnail_hover} classes='h-[130vw] sm:h-[70vw] lg:h-[37vw] object-cover' />
				</div>
		</div>

	</Link>
</Container>