<script>
  import Text from "$lib/prismic/atoms/text.svelte"
	import Slices from "$lib/prismic/functionality/slices.svelte"

  export let data

  const { document } = data
</script>

<Text classes="h4 text-center pt-16 pb-8" plain field={document.data.title} />
<Slices slices={document.data.body} />