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

<div>
	<progress
	class="cursor-pointer pr-4"
	value="{(time / duration) || 0}"
	on:mousemove={handleMove}
	on:touchmove|preventDefault={handleMove}
	on:mouseup={handleMouseup}
	/>
</div>