<script>
    import Lazy from '$lib/addons/lazyload/lazy.svelte'

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

<Lazy height={500} offset={200} fadeOption={{delay: 100, duration: 500}}>
    <video class="border-b border-lines" playsinline poster="{videoPoster}" autoplay loop muted>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</Lazy>