<script>
  import Text from "$lib/prismic/atoms/text.svelte"
	import GalleryList from "$lib/prismic/modules/gallery-list/gallery-list.svelte"
	import GallerySlider1 from "$lib/prismic/modules/gallery-slider/gallery-slider-1.svelte"
	import LayoutColumn from "$lib/tools/column/column.svelte"
	import LayoutAccordeon from "$lib/tools/accordeon/accordeon.svelte"
	import Price from "$lib/prismic/modules/price/price.svelte"
	import ShopifyBuyButton from "$lib/tools/shopify-buy-button.svelte"

  export let data

	const { document} = data
</script>

<LayoutColumn>
	<span slot="mobile">
		<GallerySlider1 input={document.data.images} />
	</span>

	<span slot="left">
		<GalleryList input={document.data.images} />
	</span>

	<span slot="right">
		<Text classes="px-6 pt-6 pb-6" plain field={document.data.title} />
		<Price item={document} classes="px-6 pb-4"/>
		<Text classes="px-6 py-6 border-b border-lines-1" plain field={document.data.description} />
		<ShopifyBuyButton productUID={'6696421818576'} />

		<LayoutAccordeon inputHeadline={'Details'} >
			<Text plain field={document.data.details} />
		</LayoutAccordeon>
	</span>
</LayoutColumn>
