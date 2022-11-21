<script>
	import Navigation2 from "$lib/prismic/modules-extended/navigation-2.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import { headerHeight } from '$lib/prismic/stores'
	import LayoutAccordeon1 from "$lib/tools/layout-accordeon-1.svelte"

	export let setup

	let height = '0'

	$: headerHeight.set(height)
</script>


<header>
	<div class="fixed z-50 w-full flex flex-row justify-center pt-4 bg-gradient-to-b from-background-1">
		<LayoutAccordeon1 plus={false} inputHeadline={setup.data.title} >
			<Navigation2 document={setup.data.navigation_header} />
		</LayoutAccordeon1>
	</div>
</header>