<script>
    // Import child components which are used in this slider
    import VideoControls from '$lib/modules-flex/videos/video-controls/video-controls.svelte'
	import InfoBoxes from '$lib/modules-flex/paragraphs/info-boxes/info-boxes.svelte'

    // Get data from parent Component
    export let item
    export let height // Shared height
    export let status
    export let index

    // Check if it is a vimeo link or a file from prismic
    let videoUrl = item.slider_video.url
    let videoVimeo = item.slider_video_link[0]

    if(videoVimeo) {
        videoUrl = item.slider_video_link[0].text
    }

    // Variables which are used for the functionality of this comp
	let y = 0
	let lastY = 0
	let infoHeight
	let marginTop = 0

	// Make variables reactive
	$: y, updateScroll()
	$: infoHeight


	// Function which detects the scroll direction
	function updateScroll() {
		let dy = lastY - y

		// Make sure that the content is visible when the page gets loaded
		if (y < 1) {
			marginTop = 0
		}
		
		lastY = y

		//  Checks if scrolling up or down
		if (dy < 0) {
			marginTop = infoHeight
		} else {
			marginTop = 0
		}
	}
</script>

<svelte:window bind:scrollY={y} />

<div class="{height} fixed top-0 left-0 z-0 w-full">
    {#if item.slider_image.url}
        <img src="{item.slider_image.Big.url}" alt="{item.slider_image.alt}" class="{height} border-lines border-b w-full object-cover">
    {/if}

    <VideoControls index="{index}" status="{status}" inputVideoUrl="{videoUrl}" inputVideoPoster="{item.slider_video_poster.Big.url}" height="h-screen"/>
</div>

<div class="{height} pointer-event-none"></div>

<div bind:clientHeight={infoHeight} style="margin-top: -{marginTop}px;" class="infoBox relative z-20 bg-white bottom-0 left-0 w-full">
	<InfoBoxes item={item} />
</div>

<style lang="postcss">
	.infoBox {
		transition: margin-top 0.3s;
	}
</style>