<script>
	import "../app.postcss"

	import Seo from "$lib/prismic/seo.svelte"
	import Header from "$lib/modules/header.svelte"
	import Footer from "$lib/modules/footer.svelte"

	import { namespace } from '$lib/prismic/setup/index' // Import the prismic repo name

	export let data

	const { document, setup } = data

	console.log(setup)
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<Seo {document} {setup} />

<Header {setup} />

<div class="wrapper">
	<slot />
</div>

<Footer />