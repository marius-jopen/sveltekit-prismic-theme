<script>
	export let video

	// Function to open the video for fullscreen
	function openFullscreen() {
		video.webkitEnterFullscreen()
		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if(video.mozRequestFullScreen){
			video.mozRequestFullScreen()
		}
	}
</script>

<div role="button" on:mousedown={openFullscreen} class="w-6 text-right">
	<i class="fa-solid fa-expand"></i>
</div>