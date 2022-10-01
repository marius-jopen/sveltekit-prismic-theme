<script>
	export let paused
	export let controls

	function playButton() {
		if(paused == false || paused == undefined) {
			paused = true
		} else {
			paused = false
		}
	}
</script>
{#if controls}
	<div role="button" on:mousedown={playButton}>
		{#if $$slots.default}
			<slot />
		{:else}
			{#if paused}
			<div class="w-6">
				<i class="fa-solid fa-play"></i>
			</div>
			{:else}
			<div class="w-6">
				<i class="fa-solid fa-pause"></i>
			</div>
			{/if}
		{/if}
	</div>
{:else}
	<slot />
{/if}