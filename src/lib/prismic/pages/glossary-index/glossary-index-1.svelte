<script>
  // import Categories from "$lib/prismic/modules/categories/categories.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
  import ItemsGlossaryItem1 from '$lib/prismic/modules/items-glossary-item/items-glossary-item-1.svelte'

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

<Text classes="h1 text-center pt-6 pb-10" plain field={document.data.title} />
<ItemsGlossaryItem1 items={filtered} />