<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Categories from "$lib/prismic/modules-basic/categories.svelte"
  import Products from '$lib/prismic/modules-basic/items-product.svelte'
  import Text from "$lib/prismic/atoms/text.svelte"
	import Container from "$lib/tools/container.svelte"

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

<Seo {setup} {document} />

<Container pt='pt-16'>
	<Text classes="h4 text-center" plain field={document.data.title} />
</Container>

<Categories type='shop' {category} {categories} />
<Products items={filtered} />