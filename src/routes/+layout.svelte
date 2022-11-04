<script>
	import "../app.postcss"
	import HeaderDesktop1 from "$lib/prismic/modules-extended/header-desktop-1.svelte"
	import HeaderMobile from "$lib/prismic/modules-basic/header-mobile.svelte"
	import Footer from "$lib/prismic/modules-basic/footer.svelte"
	import { namespace } from '$lib/prismic/setup' // Import the prismic repo name

	export let data

	const { setup } = data
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<HeaderDesktop1 {setup} />
<HeaderMobile {setup} />

<div class="wrapper min-h-screen">
	<slot />
</div>

<Footer />