<script>
    // Get data from parent Component
    export let item

    // Shared height
    let height = "h-50vw sm:h-30vw"
</script>

<div class="{height}">
    {#if item.slider_image.url}
        <img src="{item.slider_image.Big.url}" alt="{item.slider_image.alt}" class="{height} w-full object-cover">
    {/if}

    {#if item.slider_video.url}
        <video class="{height} w-full object-cover" playsinline poster="" autoplay loop muted>
            <source src={item.slider_video.url} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    {/if}
</div>