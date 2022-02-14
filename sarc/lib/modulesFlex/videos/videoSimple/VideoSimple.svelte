<script>
	// Get data from parent component or from Slice function
    export let slice
    export let inputVideoUrl
	export let inputVideoPoster

	// Define variables which get used in this component
	let videoUrl
	let videoPoster
	let videoVimeo

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

<video muted class="border-b border-lines" playsinline poster="{videoPoster}" autoplay loop>
	<source src={videoUrl} type="video/mp4" />
	Your browser does not support the video tag.
</video>