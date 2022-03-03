<script>
    // Get data from parent Component
    export let item
    export let height // Shared height

    // Check if it is a vimeo link or a file from prismic
    let videoUrl = item.slider_video.url
    let videoVimeo = item.slider_video_link[0]

    if(videoVimeo) {
        videoUrl = item.slider_video_link[0].text
    }
</script>

<div class="{height}">
    {#if item.slider_image.url}
        <img src="{item.slider_image.Big.url}" alt="{item.slider_image.alt}" class="{height} w-full object-cover">
    {/if}

    {#if videoUrl || videoVimeo}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="{height} w-full object-cover" playsinline poster="{item.slider_video_poster.Big.url}" autoplay loop muted>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    {/if}
</div>