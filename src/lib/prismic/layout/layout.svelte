<script>
	import "$lib/tools/css/app.postcss"

	import HeaderDesktop from "$lib/prismic/modules/header-desktop/header-desktop.svelte"
	import HeaderMobile from "$lib/prismic/modules/header-mobile/header-mobile.svelte"
	import Footer from "$lib/prismic/modules/footer/footer.svelte"

	export let data

	const { setup } = data
</script>

<HeaderDesktop {setup} />
<HeaderMobile {setup} />

<div class="wrapper min-h-screen p1">
	<slot />
</div>

<Footer {setup} />