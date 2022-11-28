<script>
	import { slide } from "svelte/transition"
	import Text from "$lib/prismic/atoms/text.svelte"
  import { browser } from "$app/environment"

	export let inputHeadline
	export let background = false
	export let close

	let accordeonState = false

	function toggleAccordeon() {
		if(accordeonState == false) {
			accordeonState = true
			if (browser) document.body.classList.add("nav-active")
		} else {
			accordeonState = false
			if (browser) document.body.classList.remove("nav-active")
		}
	}

	function closeAccordeon() {
		accordeonState = false
		if (browser) document.body.classList.remove("nav-active")
	}

	$: close, closeAccordeon()
</script>

<div class="{accordeonState ? 'overflow-scroll h-screen' : ''} w-full {background ? 'pt-6' : ''} {background && accordeonState ? 'bg-gradient-to-b from-background-1 via-background-1' : ''} ">
	<div class="-mt-px">
		<div on:click={toggleAccordeon}>
			<div class="flex w-full justify-center">
				<div class="flex justify-center mb-4 w-full flex-row ">
					<div class="inline-block cursor-pointer rounded-full shadow-md px-6 py-0.5 font-bold bg-gradient-to-r from-red-200 to-blue-200">
						<Text inline field={inputHeadline} />
					</div>

					{#if !accordeonState}
						<div class="w-[50px] text-center inline-block shadow-md cursor-pointer rounded-full py-0.5 bg-gradient-to-r from-red-200 to-blue-200">
							...
						</div>
					{/if}
				</div>
			</div>
		</div>

		{#if accordeonState}
			<div class="content" transition:slide={{ duration: 300 }}>
				<div class="flex flex-col">
					<slot>
					</slot>
				</div>
			</div>
		{/if}
	</div>
</div>


<style lang="postcss">
	:global(.nav-active) {
			@apply h-screen overflow-hidden;
		}
</style>