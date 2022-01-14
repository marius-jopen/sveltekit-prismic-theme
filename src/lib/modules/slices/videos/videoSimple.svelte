<script>
    export let slice
    export let inputVideoUrl
	export let inputVideoPoster

	let videoUrl
	let videoPoster

	if (slice == undefined){
		videoUrl = inputVideoUrl
		videoPoster = inputVideoPoster
	} else {
		videoUrl = slice.primary.video.url
		videoPoster = slice.primary.preview_image.Big.url
	}
</script>

<video class="border-b border-lines" playsinline poster="{videoPoster}" autoplay loop muted>
	<source src={videoUrl} type="video/mp4" />
	Your browser does not support the video tag.
</video>