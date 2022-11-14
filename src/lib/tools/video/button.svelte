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
		{#if paused}
			<div class="w-6">
				<i class="fa-solid fa-play"></i>
			</div>
		{:else}
			<div class="w-6">
				<i class="fa-solid fa-pause"></i>
			</div>
		{/if}
</div>