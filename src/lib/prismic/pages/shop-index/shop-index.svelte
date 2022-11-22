<script>
  import Categories from "$lib/prismic/modules/categories/categories.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
  import ItemsProduct from '$lib/prismic/modules/items-product/items-product.svelte'

	export let data

	// START CATEGORIES FILTER -> REACTIVE
	let { category,
    categories,
    setup,
    document,
    filtered
  } = data

  $: {
    if (data) {
      category = data.category
      setup = data.setup
      document = data.document
      filtered = data.filtered
    }
  }
	// END CATEGORIES FILTER -> REACTIVE
</script>

<Text classes="h4 text-center pt-16 pb-8" plain field={document.data.title} />
<Categories type='shop' {category} {categories} />
<ItemsProduct items={filtered} />