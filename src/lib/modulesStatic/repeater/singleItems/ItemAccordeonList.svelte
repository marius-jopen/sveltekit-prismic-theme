<script>
	import { slide } from "svelte/transition";

    export let item
	export let status
	export let interalStatus
	export let uid

	$: interalStatus
	$: uid

	function toggle() {
		if (interalStatus == true) {
			interalStatus = false
			uid = ""
		} else {
			interalStatus = true
			uid = item.uid
		}
	}
</script>

<div on:click={toggle} class="textHoverGrey cursor-pointer flex text-xl py-3 px-4 w-full border-b border-lines">
	<div class="w-1/3">
		{item.data.title[0].text}
	</div>

	{#if item.data.sub_title[0]}
		<div class="w-1/3">
			{item.data.sub_title[0].text}
		</div>
	{/if}

	<div class="w-1/3">
		{item.last_publication_date}
	</div>
</div>

{#if status == true}
	<div class="bg-neutral-100 flex w-full border-b border-lines py-4 px-4" transition:slide={{ duration: 300 }}>
		<div class="w-1/2">
			{item.data.title[0].text}
		</div>

		<img src="{item.data.thumbnail.Big.url}" class="w-1/2 h-30vw object-cover" alt="">
	</div>
{/if}