<script>
	import Hamburger from 'svelte-hamburgers'
	import { fade } from 'svelte/transition'
	import Navigation from "$lib/prismic/modules/navigation/navigation.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let setup

	let open = false
	let height = 'h-10 text-xs'

	function close() {
		open = false
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/collapse.css" />
</svelte:head>

<div class="{height} border-b border-lines-1 sm:hidden flex top-0 fixed w-screen z-50 px-2 bg-background-1 justify-between pt-[7px]">

	<div class="">
		<Hamburger
		bind:open
		type="collapse"
		--padding="5px"
		--layer-height="1.5px"
		--layer-width="20px"
		--layer-spacing="5px"
		/>
	</div>

	<div class="pointer-events-none absolute w-full justify-center flex z-0 p1 text-xs pt-1">
		<Text plain field={setup.data.title} />
	</div>

	<div class="cart-button absolute right-4 top-[10px]">
		<svg version="1.1" class="h-4" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 18.25 19.11" style="enable-background:new 0 0 18.25 19.11;" xml:space="preserve">
			<path style="fill: black" d="M15.31,4.34V1.62c0-0.9-0.73-1.62-1.62-1.62H4.56c-0.9,0-1.62,0.73-1.62,1.62v2.72H0v14.77h18.25V4.34H15.31z M4.56,1.25
			h9.13c0.21,0,0.38,0.17,0.38,0.38v2.72H4.18V1.62C4.18,1.42,4.35,1.25,4.56,1.25z M1.25,17.86V5.59H17v12.27H1.25z"/>
		</svg>
	</div>
</div>

{#if open == true}
	<div class="flex sm:hidden top-[8px] h-screen fixed w-screen z-40 bg-background-1 flex-col justify-center" transition:fade>
		<div class="flex flex-col text-center -mt-20 leading-8" on:click="{close}">
			<Navigation document={setup.data.navigation_header} />
		</div>
	</div>
{/if}

<div class="{height} block sm:hidden bg-background-1 w-full">
	&nbsp;
</div>