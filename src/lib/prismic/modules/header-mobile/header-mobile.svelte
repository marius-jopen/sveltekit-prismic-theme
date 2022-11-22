<script>
	import Hamburger from 'svelte-hamburgers'
	import { fade } from 'svelte/transition'
	import Text from "$lib/prismic/atoms/text.svelte"
	import Navigation from "$lib/prismic/modules/navigation/navigation.svelte"

	export let setup

	let open = false
	let height = 'h-16 text-lg'

	function close() {
		open = false
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/collapse.css" />
</svelte:head>

<div class="{height} sm:hidden flex top-0 fixed w-screen z-50 px-2 bg-background-1 justify-between cursor-pointer pt-2">
	<a data-sveltekit-prefetch on:click="{close}" class="pt-2 pl-2" href="/">
		<Text plain field={setup.data.title} />
	</a>

	<div class="pt-0.5">
		<Hamburger
		bind:open
		type="collapse"
		--padding="10px"
		--layer-height="2px"
		--layer-width="25px"
		--layer-spacing="6px"
		/>
	</div>
</div>

{#if open == true}
	<div class="flex sm:hidden top-12 h-screen fixed w-screen z-50 bg-background-1 flex-col justify-center" transition:fade>
		<div class="flex flex-col text-center -mt-20 leading-8" on:click="{close}">
			<Navigation document={setup.data.navigation_header} />
		</div>
	</div>
{/if}

<div class="{height} block sm:hidden bg-background-1 w-full">
	&nbsp;
</div>