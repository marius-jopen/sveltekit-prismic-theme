<script>
    // Get data from parent component
    export let item
</script>

<div class="relative w-1/2 related-item">
    <!-- Video -->
    <video class="h-full w-full object-cover" playsinline poster="{item.data.preview_video_poster_url}" autoplay loop muted>
        <source src={((item.data.preview_video_link[0]) ? item.data.preview_video_link[0].text : item.data.preview_video.url)} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <!-- Text overlay -->
    <a href="/" class="block absolute h-full w-full top-0 left-0 flex flex-col justify-end">
        <div class="text-xl py-4 px-4 text-white">
            {item.data.title[0].text}
        </div>
    </a>
</div>

<style>
    /* 
    Set height of itemand remove the white or grey gap between the slides which is a bug from swiperJs I suppose 
    */
    .related-item {
        height: calc(40vh + 2px);
    }
</style>