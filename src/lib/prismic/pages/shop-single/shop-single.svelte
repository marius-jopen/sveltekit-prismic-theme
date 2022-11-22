<script>
  import Text from "$lib/prismic/atoms/text.svelte"
	import GalleryList from "$lib/prismic/modules/gallery-list/gallery-list.svelte"
	import GallerySlider from "$lib/prismic/modules/gallery-slider/gallery-slider.svelte"
	import LayoutColumn from "$lib/tools/column/column.svelte"
	import Price from "$lib/prismic/modules/price/price.svelte"
	import ShopifyBuyButton from "$lib/tools/shopify-buy-button.svelte"

	export let data

	const { document} = data
</script>

<LayoutColumn>
	<span slot="mobile">
		<GallerySlider input={document.data.images} />
	</span>

	<span slot="left">
		<GalleryList input={document.data.images} />
	</span>

	<span slot="right">
		<Text classes="px-6 pt-4 pb-4" plain field={document.data.title} />
		<Price item={document} classes="px-6 pb-4"/>
		<Text classes="px-6 py-4" plain field={document.data.description} />
		<Text plain classes="px-6 text-xs" field={document.data.details} />
		<ShopifyBuyButton productUID={'6696421818576'} />
	</span>
</LayoutColumn>
