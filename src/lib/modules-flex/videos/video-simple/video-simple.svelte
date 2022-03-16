<script>
	// Import mount function to control the mute and autoplay
	import { onMount } from 'svelte'

	// Get data from parent component or from Slice function
    export let slice
    export let inputVideoUrl
	export let inputVideoPoster

	// Define variables which get used in this component
	let videoUrl
	let videoPoster
	let videoVimeo
    let video
    let paused

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		videoUrl = inputVideoUrl
		videoPoster = inputVideoPoster
	} else {
		videoUrl = slice.primary.video.url
		videoVimeo = slice.primary.vimeo[0].text
		videoPoster = slice.primary.preview_image.Big.url

		if(videoVimeo) {
			videoUrl = videoVimeo
		}
	}

	// Sets video volume to 0 on load and activates autoplay
	onMount(() => {
      video.volume = 0;
      paused = false
    }) 
	
	// Sets video volume to 0 on load
    function videoMute() {
        video.volume = 0
    }
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video on:load="{videoMute}" bind:paused bind:this={video} class="border-b border-lines w-full" poster="{videoPoster}" playsinline loop muted  >
	<source src={videoUrl} type="video/mp4" />
	Your browser does not support the video tag.
</video>