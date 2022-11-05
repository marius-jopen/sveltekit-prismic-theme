<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte";
  import Text from "$lib/prismic/atoms/text.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"

  export let data

  const { setup, document } = data
</script>

<Seo {setup} {document} />

<Container classes='width-3xl py-20'>
	<Image src={document.data.thumbnail} classes="rounded-3xl mb-4" />
	<Text classes="h4 text-center" plain field={document.data.title} />
</Container>