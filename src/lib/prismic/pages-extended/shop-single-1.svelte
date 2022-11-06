<script>
  import Text from "$lib/prismic/atoms/text.svelte"
	import ImageList from "$lib/prismic/addons/images-list.svelte"
	import LayoutColumn from "$lib/tools/layout-column.svelte"
	import LayoutAccordeon from "$lib/tools/layout-accordeon.svelte"
	import Price from "$lib/prismic/addons/price.svelte"
	import ShopifyBuyButton from "$lib/tools/shopify-buy-button.svelte"

  export let data

	const { document} = data
</script>

<LayoutColumn>
	<span slot="mobile">
		<ImageList imageList={document.data.images} />
	</span>

	<span slot="left">
		<ImageList imageList={document.data.images} />
	</span>

	<span slot="right">
		<Text classes="headline-1 px-6 pt-6 pb-6" plain field={document.data.title} />

		<div class="px-6 pb-6 border-b border-lines-1">
			<Price item={document} />

			<div>
				{#if document.data.few_pieces_left}
					Few Pieces Left
				{/if}

				{#if document.data.on_sale}
					On Sale
				{/if}
			</div>
		</div>

		<Text classes="px-6 py-6 border-b border-lines-1" plain field={document.data.description} />

		<ShopifyBuyButton productUID={'6696421818576'} />

		<LayoutAccordeon inputHeadline={'Details'} >
			<Text plain field={document.data.details} />
		</LayoutAccordeon>
	</span>
</LayoutColumn>
