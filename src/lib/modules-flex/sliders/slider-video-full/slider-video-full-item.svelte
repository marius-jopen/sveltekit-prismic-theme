<script>
    // Import child components which are used in this slider
    import VideoControls from '$lib/modules-flex/videos/video-controls/video-controls.svelte'

    // Get data from parent Component
    export let item
    export let height // Shared height
    export let status

    // Check if it is a vimeo link or a file from prismic
    let videoUrl = item.slider_video.url
    let videoVimeo = item.slider_video_link[0]

    if(videoVimeo) {
        videoUrl = item.slider_video_link[0].text
    }
</script>

<div class="{height}">
    {#if item.slider_image.url}
        <img src="{item.slider_image.Big.url}" alt="{item.slider_image.alt}" class="{height} border-lines border-b w-full object-cover">
    {/if}

    <VideoControls status="{status}" inputVideoUrl="{videoUrl}" inputVideoPoster="{item.slider_video_poster.Big.url}" height="h-screen"/>
</div>