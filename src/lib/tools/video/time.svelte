<script>
	export let time

	// Function to display the time of the video
	function format(seconds) {
		if (isNaN(seconds)) return '0:00'
		const minutes = Math.floor(seconds / 60)
		seconds = Math.floor(seconds % 60)
		if (seconds < 10) seconds = '0' + seconds
		return `${minutes}:${seconds}`
	}
</script>

<div class="w-16">
	{format(time)}
</div>