<script>
	import { slide } from "svelte/transition"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let inputHeadline

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
	<div on:click={toggleAccordeon} class="cursor-pointer">
		<Text inline field={inputHeadline} />
	</div>

	{#if accordeonState == true}
		<div class="content" transition:slide={{ duration: 300 }}>
			<div class="flex flex-col">
				<slot>
				</slot>
			</div>
		</div>
	{/if}
</div>