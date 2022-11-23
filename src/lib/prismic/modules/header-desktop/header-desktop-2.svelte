<script>
	import Navigation2 from "$lib/prismic/modules/navigation/navigation-2.svelte"
	import { headerHeight } from '$lib/prismic/functionality/stores'
	import LayoutAccordeon1 from "$lib/tools/accordeon/accordeon-1.svelte"

	export let setup

	let height = '0'
	let close = true

	$: headerHeight.set(height)
</script>

<header>
	<div class="fixed z-50 w-full flex flex-row justify-center ut1">
		<LayoutAccordeon1 background inputHeadline={setup.data.title} {close} >
			<Navigation2 document={setup.data.navigation_header} bind:closeAccordeonToggle={close} />
		</LayoutAccordeon1>
	</div>
</header>

<div class="hidden sm:block h-24">
	&nbsp;
</div>