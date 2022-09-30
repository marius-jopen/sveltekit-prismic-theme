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

<div role="button" on:mousedown={openFullscreen}>
	Fullscreen
</div>