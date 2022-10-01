<script>
	import Slices from "$lib/prismic/slices.svelte";
	import Seo from "$lib/prismic/seo.svelte";

  export let data
  const { document, setup } = data
</script>

<Seo {document} {setup} />

<Slices slices={document.data.body} />