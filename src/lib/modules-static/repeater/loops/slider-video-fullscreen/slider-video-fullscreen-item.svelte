<script>
    export let item

    // Define variables which are used in the slider
    let textColor 

    // Check project brightness and adjust text color
    if(item.data.brightness == false || item.data.brightness == null ) {
        textColor = "text-fonts"
    } else {
        textColor = "text-fonts-invert"
    }
</script>

<a class="{textColor} video-box relative block h-full" href="/"> 
    <!-- Video -->
    <video class="h-full w-full object-cover" playsinline poster="{item.data.preview_video_poster.Big.url}" autoplay loop muted>
        <source src={((item.data.preview_video_link[0]) ? item.data.preview_video_link[0].text : item.data.preview_video.url)} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <!-- Text overlay -->
    <div class="absolute h-full w-full top-0 left-0 flex flex-col justify-end">
        <div class="text-xl py-4 px-4">
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