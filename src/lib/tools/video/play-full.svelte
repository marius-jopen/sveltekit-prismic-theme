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
	<slot />
</div>