<script>
	export let paused

	function playButton() {
		if(paused == false || paused == undefined) {
			paused = true
		} else {
			paused = false
		}
	}
</script>

<div role="button" on:mousedown={playButton}>
	{#if $$slots.default}
		<slot />
	{:else}
		{#if paused}
			play
		{:else}
			pause
		{/if}
	{/if}
</div>