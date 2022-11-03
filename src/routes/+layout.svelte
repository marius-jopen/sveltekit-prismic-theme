<script>
	import "../app.postcss"
	import Header from "$lib/prismic/modules/header.svelte"
	import Footer from "$lib/prismic/modules/footer.svelte"
	import { namespace } from '$lib/prismic/setup/index' // Import the prismic repo name

	export let data

	const { setup } = data
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<Header {setup} />

<div class="wrapper">
	<slot />
</div>

<Footer />