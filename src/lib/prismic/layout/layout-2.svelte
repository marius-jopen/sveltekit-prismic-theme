<script>
	import HeaderDesktop2 from "$lib/prismic/modules/header-desktop/header-desktop-2.svelte"
	import HeaderMobile1 from "$lib/prismic/modules/header-mobile/header-mobile-1.svelte"
	import Footer from "$lib/prismic/modules/footer/footer.svelte"

	export let data

	const { setup } = data
</script>

<HeaderDesktop2 {setup} />
<HeaderMobile1 {setup} />

<div class="wrapper min-h-screen">
	<slot />
</div>

<Footer {setup} />