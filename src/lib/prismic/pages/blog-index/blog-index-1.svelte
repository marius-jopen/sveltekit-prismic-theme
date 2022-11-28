<script>
  import Categories from "$lib/prismic/modules/categories/categories.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import ItemsBlogPost1 from "$lib/prismic/modules/items-blog-post/items-blog-post-1.svelte";

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

<Text classes="h3 text-center pt-6 pb-8" plain field={document.data.title} />
<ItemsBlogPost1 items={filtered} />