<script>
	import { slide } from "svelte/transition"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let inputHeadline
	export let plus = true
	export let background = false
	export let color = ''

	let accordeonState = false

	function toggleAccordeon() {
		if(accordeonState == false) {
			accordeonState = true
		} else {
			accordeonState = false
		}
	}
</script>

<div class="bg-background-3 flex rounded-r-2xl w-full {background ? 'pt-4' : ''} {background && accordeonState ? 'bg-gradient-to-b from-background-1' : ''} ">
	<div class="{color} w-4" />

	<div class="w-full">
		<div on:click={toggleAccordeon}>
			<div class="flex w-full flex-row justify-between cursor-pointer px-4 pt-3 pb-3">
				<Text inline field={inputHeadline} classes="h3" />

				{#if plus}
					<div class="mt-[2px] bg-white rounded-full h-6 w-6 pt-1 flex justify-center">
						<svg class="h-4 transition-transform {accordeonState ? 'rotate-180' : 'rotate-0'}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 35L24 12L47 35" stroke="black" stroke-width="4"/>
						</svg>
					</div>
				{/if}
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