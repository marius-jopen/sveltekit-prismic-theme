<script>
    // Import child components which are used in this slider
    import VideoControls from '$lib/modules-flex/videos/video-controls/video-controls.svelte'

    // Get data from parent Component
    export let item
    export let slideIndex
    export let index
    export let sliderClicked

    // Check if it is a vimeo link or a file from prismic
    let videoUrl = item.slider_video_full_info_video.url
    let videoVimeo = item.slider_video_full_info_vimeo[0]

    if(videoVimeo) {
        videoUrl = item.slider_video_full_info_vimeo[0].text
    }
</script>

<!-- Content of Slider -->
<div class="h-screen fixed top-0 left-0 z-0 w-full">
    <VideoControls inputSliderClicked={sliderClicked} inputIndex="{index}" inputSlideIndex="{slideIndex}" inputVideoUrl="{videoUrl}" inputVideoPoster="{item.slider_video_full_info_video_poster.Big.url}" inputHeight="h-screen"/>
</div>