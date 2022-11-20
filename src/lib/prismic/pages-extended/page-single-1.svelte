<script>
	import Slices from "$lib/prismic/slices.svelte"

  export let data

  const { document } = data
</script>

<Slices data slices={document.data.body} />