<script>
	export let time
	export let duration

	// Function to control the progress bar
	function handleMove(e) {
		if (!duration) return
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return
		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
		const { left, right } = this.getBoundingClientRect()
		time = duration * (clientX - left) / (right - left)
	}

	// Function to play and pause the video by clicking on the video
	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play()
			else e.target.pause()
		}
	}
</script>

<div class="px-2 pt-0.5 w-full">
	<progress
	class="cursor-pointer"
	value="{(time / duration) || 0}"
	on:mousemove={handleMove}
	on:touchmove|preventDefault={handleMove}
	on:mouseup={handleMouseup}
	/>
</div>

<style lang="postcss">
	progress {
		display: block;
		width: 100%;
		padding-top: 9px;
		padding-bottom: 4px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0,0,0,0.6);
	}

	progress::-webkit-progress-value {
		background-color: red;
	}
</style>