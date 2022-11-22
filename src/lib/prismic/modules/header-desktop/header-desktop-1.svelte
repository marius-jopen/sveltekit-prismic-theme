<script>
	import Navigation from "$lib/prismic/modules/navigation/navigation.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import { headerHeight } from '$lib/prismic/functionality/stores'

	export let setup

	let height = ''

	$: headerHeight.set(height);
</script>

<header bind:clientHeight={height} class="fixed top-0 w-full z-20 hidden sm:block bg-background-1">
	<div class="border-b border-lines-1 px-4 h-8 flex justify-center flex-col uppercase">
		<a class="w-1/2" href="/">
			<Text plain field={setup.data.title} />
		</a>

		<div class="cart-button absolute right-4 top-2">
			<svg version="1.1" class="h-3.5" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 18.25 19.11" style="enable-background:new 0 0 18.25 19.11;" xml:space="preserve">
				<path style="fill: black" d="M15.31,4.34V1.62c0-0.9-0.73-1.62-1.62-1.62H4.56c-0.9,0-1.62,0.73-1.62,1.62v2.72H0v14.77h18.25V4.34H15.31z M4.56,1.25
				h9.13c0.21,0,0.38,0.17,0.38,0.38v2.72H4.18V1.62C4.18,1.42,4.35,1.25,4.56,1.25z M1.25,17.86V5.59H17v12.27H1.25z"/>
			</svg>
		</div>
	</div>

	<div class="border-b border-lines-1 px-4 p1 text-xs flex justify-center flex-col h-8 ">
		<div class="flex gap-3">
			<Navigation document={setup.data.navigation_header} />
		</div>
	</div>
</header>

<div class="hidden sm:block h-16">
	&nbsp;
</div>