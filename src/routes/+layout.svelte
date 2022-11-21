<script>
	import "../app.postcss"
	import HeaderDesktop from "$lib/prismic/modules/header-desktop.svelte"
	import HeaderDesktop1 from "$lib/prismic/modules-extended/header-desktop-1.svelte"
	import HeaderDesktop2 from "$lib/prismic/modules-extended/header-desktop-2.svelte"
  import HeaderMobile from "$lib/prismic/modules/header-mobile.svelte"
	import HeaderMobile1 from "$lib/prismic/modules-extended/header-mobile-1.svelte"
	import Footer from "$lib/prismic/modules/footer.svelte"
	import Footer1 from "$lib/prismic/modules-extended/footer-1.svelte"
	import { namespace } from '$lib/prismic/setup'
	import { vh, glossaryAll } from '$lib/prismic/stores'

	export let data

	const {
		setup,
		glossary
	} = data

	let innerHeight = ''

	$: vh.set(innerHeight)
	$: glossaryAll.set(glossary)
</script>

<svelte:head>
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<svelte:window bind:innerHeight />

<!-- <HeaderDesktop {setup} /> -->
<HeaderMobile {setup} />
<!-- <HeaderDesktop1 {setup} /> -->
<!-- <HeaderMobile1 {setup} /> -->
<HeaderDesktop2 {setup} />

<div class="wrapper min-h-screen">
	<slot />
</div>

<Footer {setup} />
<!-- <Footer1 {setup} /> -->