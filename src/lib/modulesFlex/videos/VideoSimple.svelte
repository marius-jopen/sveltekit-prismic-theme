<script>
    export let slice
    export let inputVideoUrl
	export let inputVideoPoster

	let videoUrl
	let videoPoster
	let videoVimeo

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