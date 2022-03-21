<script>
    // Import mount function to control the mute and autoplay
	import { onMount } from 'svelte'

    // Get data from parent Component
    export let item
    export let height // Shared height

    // Define variables which get used in this component
    let video
    let paused

    // Check if it is a vimeo link or a file from prismic
    let videoUrl = item.slider_complex_video.url
    let videoVimeo = item.slider_complex_video_link[0]

    if(videoVimeo) {
        videoUrl = item.slider_complex_video_link[0].text
    }

    // Sets video volume to 0 on load and activates autoplay
    onMount(() => {
        if(videoUrl || videoVimeo) {
            video.volume = 0;
            paused = false
        }
    }) 

    // Sets video volume to 0 on load
    function videoMute() {
        video.volume = 0
    }
</script>

<div class="{height}">
    {#if item.slider_complex_image.url}
        <img src="{item.slider_complex_image.Big.url}" alt="{item.slider_complex_image.alt}" class="{height} w-full object-cover">
    {/if}

    {#if videoUrl || videoVimeo}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video on:load="{videoMute}" bind:paused bind:this={video} class="{height} w-full object-cover" poster="{item.slider_complex_video_poster.Big.url}" playsinline loop muted  >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    {/if}
</div>