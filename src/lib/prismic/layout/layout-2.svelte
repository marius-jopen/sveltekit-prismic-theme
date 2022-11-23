<script>
	import "$lib/tools/css/app-1.postcss"

	import HeaderDesktop2 from "$lib/prismic/modules/header-desktop/header-desktop-2.svelte"
	import Footer from "$lib/prismic/modules/footer/footer.svelte"

	export let data

	const { setup } = data
</script>

<HeaderDesktop2 {setup} />

<div class="wrapper min-h-screen flex bg-background-1">
	<div class="w-2/12">
		left
	</div>

	<div class="w-8/12 bg-background-2 rounded-2xl mb-8 overflow-hidden">
		<slot />

		<Footer {setup} />
	</div>

	<div class="w-2/12">
		right
	</div>
</div>