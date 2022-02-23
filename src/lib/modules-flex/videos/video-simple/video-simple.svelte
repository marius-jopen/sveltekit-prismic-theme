<script>
	// Get data from parent component or from Slice function
    export let slice
    export let inputVideoUrl
	export let inputVideoPoster

	// Define variables which get used in this component
	let videoUrl
	let videoPoster
	let videoVimeo
	let muted = true

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
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video class="border-b border-lines w-full" poster="{videoPoster}" playsinline autoplay loop bind:muted>
	<source src={videoUrl} type="video/mp4" />
	Your browser does not support the video tag.
</video>