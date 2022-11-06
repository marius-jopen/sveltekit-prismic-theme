<script>
  import Text from "$lib/prismic/atoms/text.svelte"
	import Slices from "$lib/prismic/slices.svelte"

  export let data

  const { document } = data
</script>

<Slices slices={document.data.body} />