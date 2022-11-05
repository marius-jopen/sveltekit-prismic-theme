<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Categories from "$lib/prismic/modules/categories.svelte"
  import Projects from '$lib/prismic/modules/items-project.svelte'
  import Text from "$lib/prismic/atoms/text.svelte"

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

<Text classes="h4 text-center pt-16 pb-8" plain field={document.data.title} />
<Categories type='projects' {category} {categories} />
<Projects items={filtered} />