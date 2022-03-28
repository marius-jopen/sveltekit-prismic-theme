<script>
	// Import Child comps which are used in this comp
	import VideoMutedLoop from '$lib/modules-basic/video-muted-loop.svelte'    

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
		videoPoster = slice.primary.video_simple_poster.Big.url

		if(videoVimeo) {
			videoUrl = videoVimeo
		}
	}
</script>

<VideoMutedLoop inputVideo={videoUrl} inputVideoPoster={videoPoster} inputClasses={"border-b border-lines w-full"} />