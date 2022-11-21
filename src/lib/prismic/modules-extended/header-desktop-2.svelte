<script>
	import Navigation2 from "$lib/prismic/modules-extended/navigation-2.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import { headerHeight } from '$lib/prismic/stores'

	export let setup

	let height = '0'

	$: headerHeight.set(height)
</script>


<header class="px-2 py-2">
	<a href="/">
		<Text plain field={setup.data.title} />
	</a>

	<div>
		<Navigation2 document={setup.data.navigation_header} />
	</div>
</header>