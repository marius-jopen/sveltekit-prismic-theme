<script>
    // Import Child comps which are used in this comp
    import VideoMutedLoop from '$lib/modules-basic/video-muted-loop.svelte'    
    import Image from '$lib/modules-basic/image.svelte'

    // Get data from parent
    export let item
</script>

<div class="video-box relative block h-full"> 
    <VideoMutedLoop inputVideo={((item.slider_complex_vertical_video_link[0]) ? item.slider_complex_vertical_video_link[0].text : item.slider_complex_vertical_video.url)} inputVideoPoster={item.slider_complex_vertical_video_poster.Big.url} inputClasses={"h-full w-full object-cover"} />
    
    <Image image={item.slider_complex_vertical_image} imageSize={"Big"} classes={'h-full w-full object-cover'} />
</div>