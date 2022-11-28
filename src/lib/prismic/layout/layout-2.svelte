<script>
	import "$lib/tools/css/app-1.postcss"

	import Navigation3 from "$lib/prismic/modules/navigation/navigation-3.svelte"
	import HeaderDesktop2 from "$lib/prismic/modules/header-desktop/header-desktop-2.svelte"
	import Footer2 from "$lib/prismic/modules/footer/footer-2.svelte"

	export let data

	const { setup } = data
</script>

<HeaderDesktop2 {setup} />

<div class="wrapper flex md:bg-background-1 p1">
	<div class="hidden md:block w-2/12">
		<Navigation3 document={setup.data.navigation_side} />
	</div>

	<div class="w-full md:w-8/12 bg-background-2 md:rounded-2xl mb-8 md:overflow-hidden">
		<slot />

		<Footer2 {setup} />
	</div>

	<div class="hidden md:block w-2/12" />
</div>