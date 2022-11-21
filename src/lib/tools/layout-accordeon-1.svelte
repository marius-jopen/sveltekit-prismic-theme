<script>
	import { slide } from "svelte/transition"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let inputHeadline
	export let plus = true

	let accordeonState = false

	function toggleAccordeon() {
		if(accordeonState == false) {
			accordeonState = true
		} else {
			accordeonState = false
		}
	}
</script>
<div class="-mt-px">
	<div on:click={toggleAccordeon}>
		<div class="flex gap-8 mb-4 w-full flex-row justify-center">
			<div class="button-1 inline-block cursor-pointer">
				<Text inline field={inputHeadline} />
			</div>

			{#if plus}
				<div class="button-1 w-12 text-center px-4 inline-block cursor-pointer">
					{#if accordeonState}
						-
					{:else}
						+
					{/if}
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