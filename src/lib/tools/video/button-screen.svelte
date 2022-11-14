<script>
	export let paused
	export let controls

	function playButton() {
		if(controls) {
			if(paused == false || paused == undefined) {
				paused = true
			} else {
				paused = false
			}
		}
	}
</script>

<div role="{controls ? 'button' : ''}" on:mousedown={playButton}>
	<slot />
</div>