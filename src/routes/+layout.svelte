<script>
	import "../app.postcss"
	import HeaderDesktop from "$lib/prismic/modules/header-desktop.svelte"
	import HeaderDesktop1 from "$lib/prismic/modules-extended/header-desktop-1.svelte"
  import HeaderMobile from "$lib/prismic/modules/header-mobile.svelte"
	import HeaderMobile1 from "$lib/prismic/modules-extended/header-mobile-1.svelte"
	import Footer1 from "$lib/prismic/modules-extended/footer-1.svelte"
	import { namespace } from '$lib/prismic/setup' // Import the prismic repo name
	import { vh } from '$lib/prismic/stores'

	export let data

	const { setup } = data

	let innerHeight = ''

	$: vh.set(innerHeight)
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<svelte:window bind:innerHeight />

<!-- <HeaderDesktop {setup} /> -->
<HeaderDesktop1 {setup} />
<!-- <HeaderMobile {setup} /> -->
<HeaderMobile1 {setup} />

<div class="wrapper min-h-screen">
	<slot />
</div>

<Footer1 {setup} />