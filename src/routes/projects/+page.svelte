<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte"
  import Projects from '$lib/prismic/modules-basic/projects.svelte'
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

<Container saos='' paddingBottom='pb-0'>
	<Text classes="h4 text-center pb-8" plain field={document.data.title} />
	<Projects {document} />
</Container>