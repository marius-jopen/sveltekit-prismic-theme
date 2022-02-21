<script>
    export let item
</script>

<a class="video-box relative block h-full" href="/"> 
    <!-- Video -->
    <video muted class="h-full w-full object-cover" playsinline poster="{item.data.preview_video_poster_url}" autoplay loop>
        <source src={((item.data.preview_video_link[0]) ? item.data.preview_video_link[0].text : item.data.preview_video.url)} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <!-- Text overlay -->
    <div class="absolute h-full w-full top-0 left-0 flex flex-col justify-end">
        <div class="text-xl py-4 px-4 text-white">
            {item.data.title[0].text}
        </div>
    </div>
</a>

<style>
    /* This removes the white or grey gap between the slides which is a bug from swiperJs I suppose */
	.video-box {
		height: calc(100% + 2px)
	}
</style>