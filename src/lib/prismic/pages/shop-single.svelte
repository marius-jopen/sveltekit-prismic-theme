<script>
  import Text from "$lib/prismic/atoms/text.svelte"
	import ImageList from "$lib/prismic/addons/images-list.svelte"
	import LayoutColumn from "$lib/tools/layout-column.svelte"
	import Price from "$lib/prismic/addons/price.svelte"
	import ShopifyBuyButton from "$lib/tools/shopify-buy-button.svelte"

  export let document
</script>

<LayoutColumn>
	<span slot="mobile">
		<ImageList imageList={document.data.images} />
	</span>

	<span slot="left">
		<ImageList imageList={document.data.images} />
	</span>

	<span slot="right">
		<Text classes="px-6 pt-4 pb-4" plain field={document.data.title} />

		<div class="px-6 pb-4 flex">
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

		<Text classes="px-6 py-4" plain field={document.data.description} />
		<Text plain classes="px-6 text-xs" field={document.data.details} />
		<ShopifyBuyButton productUID={'6696421818576'} />
	</span>
</LayoutColumn>
