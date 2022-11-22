<script>
	import Navigation from "$lib/prismic/modules/navigation/navigation.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import { headerHeight } from '$lib/prismic/functionality/stores'

	export let setup

	let height = '0'

	$: headerHeight.set(height)
</script>


<header class="justify-between px-2 py-2 hidden sm:flex">
	<a href="/">
		<Text plain field={setup.data.title} />
	</a>

	<div class="flex gap-3">
		<Navigation document={setup.data.navigation_header} />

		<div>
			Cart
		</div>
	</div>
</header>