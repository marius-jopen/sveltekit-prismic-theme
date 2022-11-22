<script>
	import { slide } from "svelte/transition"

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
	<div on:click={toggleAccordeon} class="p1 text-xs cursor-pointer border-t border-b border-lines-1 px-4 py-3">
		{inputHeadline}
	</div>

	{#if accordeonState == true}
		<div class="content" transition:slide={{ duration: 300 }}>
			<div class="border-b border-lines-1 px-6 pt-3 pb-5">
				<slot>
				</slot>
			</div>
		</div>
	{/if}
</div>