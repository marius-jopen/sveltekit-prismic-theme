<script>
	import "$lib/tools/css/app.postcss"

	import HeaderDesktop1 from "$lib/prismic/modules/header-desktop/header-desktop-1.svelte"
	import HeaderMobile1 from "$lib/prismic/modules/header-mobile/header-mobile-1.svelte"
	import Footer1 from "$lib/prismic/modules/footer/footer-1.svelte"

	export let data

	const { setup } = data
</script>

<HeaderDesktop1 {setup} />
<HeaderMobile1 {setup} />

<div class="wrapper min-h-screen p1">
	<slot />
</div>

<Footer1 {setup} />