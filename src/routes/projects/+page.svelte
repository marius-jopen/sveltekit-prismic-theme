<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte"
  import ProjectItem from "$lib/prismic/modules/project-item.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"

	export let data

	let {
    category,
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
</script>

<Seo {setup} {document} />

<Container>
	<Text
    classes="h4 text-center pb-6"
    plain
    field={document.data.title}
  />
	<Categories
    type='projects'
    {category}
    {categories}
  />

<Container>
	<div class="sm:flex flex-wrap">
		{#each filtered as item (item.item.uid)}
			<ProjectItem item={item.item} />
		{/each}
	</div>
</Container>