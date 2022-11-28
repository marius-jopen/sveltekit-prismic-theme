<script>
	import { slide } from "svelte/transition"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let inputHeadline
	export let background = false
	export let close
	export let parent = false

	let accordeonState = false
	let hover = false

	function toggleAccordeon() {
		if(accordeonState == false) {
			accordeonState = true
		} else {
			accordeonState = false
		}
	}

	function closeAccordeon() {
		accordeonState = false
	}

	function mouseEnter() {
		hover = true
	}

	function mouseLeave() {
		hover = false
	}

	$: close, closeAccordeon()
</script>

<div class="w-full {background ? 'pt-6' : ''} {background && accordeonState ? 'bg-gradient-to-b from-background-1 via-background-1' : ''} ">
	<div class="-mt-px">
		<div on:click={toggleAccordeon} on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
			<div class="flex w-full justify-center">
				<div class="flex gap-4 w-11/12 sm:w-3/4 lg:w-1/3 justify-between mb-4 flex-row ">
					<div class="flex justify-center w-full">
						<div class="inline-block cursor-pointer rounded-full shadow-md px-6 py-0.5 {hover ? 'bg-gradient-to-r from-red-200 to-blue-200' : 'bg-white'}">
							<Text inline field={inputHeadline} />
						</div>
					</div>

					<div class="w-[50px] text-center inline-block cursor-pointer shadow-md rounded-full py-0.5 {hover ? 'bg-gradient-to-r from-red-200 to-blue-200' : 'bg-white'}">
						{#if accordeonState}
							-
						{:else}
							+
						{/if}
					</div>
				</div>
			</div>
		</div>

		{#if accordeonState}
			<div class="content pb-6" transition:slide={{ duration: 300 }}>
				<div class="flex flex-col">
					<slot>
					</slot>
				</div>
			</div>
		{/if}
	</div>
</div>