<script>
	export let time
	export let duration

	function handleMove(e) {
		if (!duration) return
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return
		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
		const { left, right } = this.getBoundingClientRect()
		time = duration * (clientX - left) / (right - left)
	}

	function mouseDown(e) {
		const clientX = e.clientX
		const { left, right } = this.getBoundingClientRect()
		time = duration * (clientX - left) / (right - left)
	}
</script>

<div class="px-2 pt-0.5 w-full">
	<progress
	class="cursor-pointer"
	value="{(time / duration) || 0}"
	on:mousedown={mouseDown}
	on:mousemove={handleMove}
	on:touchmove|preventDefault={handleMove}
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