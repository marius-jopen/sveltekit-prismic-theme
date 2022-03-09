<script>
    // Import child components which are used in this slider
    import VideoControls from '$lib/modules-flex/videos/video-controls/video-controls.svelte'
	import InfoBoxes from '$lib/modules-flex/paragraphs/info-boxes/info-boxes.svelte'
    
    // Import the store for passing props to other comps
	import { filmControlStatus } from '$lib/functionality/store/store'

    // Get data from parent Component
    export let item
    export let height // Shared height
    export let slideIndex
    export let index
    export let sliderClicked

    // Check if it is a vimeo link or a file from prismic
    let videoUrl = item.slider_video.url
    let videoVimeo = item.slider_video_link[0]

    if(videoVimeo) {
        videoUrl = item.slider_video_link[0].text
    }

    // Define variables which are used in this comp
    let infoPassUp // Get from binding of child
    let slide // Binding of the slide container
    
    // Make variables reactive
    // Calls scroll function when the controls are hidden
    $: if($filmControlStatus == true) {
        infoPassUp = false
        setInfoScroll()
    }

    // Calls scroll function when the button here or in the child gets called
    $: infoPassUp, setInfoScroll()
    
    // Sets the scroll position. Probably I could have made it more clean by not using this function
    // but it works now.
    function setInfoScroll() {
        if(infoPassUp !== undefined) {
            if(infoPassUp == true) {
                slide.scrollTop = 100000
            } else {
                slide.scrollTop = 0
            }
        }
    }

    // Toggle function of info area (Can be used in combination with the button below)
    // function toggleInfo() {
	// 	if(infoPassUp == false || infoPassUp == undefined) {
	// 		infoPassUp = true
	// 	} else {
	// 		infoPassUp = false
    // 	}
	// }
</script>

<!-- Button which can be used if a info toggle button is needed here -->
<!-- <div class="fixed top-20 left-20 text-white z-20 cursor-pointer" on:click="{toggleInfo}">
    Info
</div> -->

<div class="slide h-screen bg-black overflow-x-hidden overflow-y-scroll w-screen" bind:this={slide}>

    <!-- Content of Slider -->
    <div class="h-screen fixed top-0 left-0 z-0 w-full">
        <!-- Image -->
        {#if item.slider_image.url}
            <img src="{item.slider_image.Big.url}" alt="{item.slider_image.alt}" class="{height} border-lines border-b w-full object-cover">
        {/if}
    
        <!-- Video -->
        <VideoControls bind:infoPassUp={infoPassUp} sliderClicked={sliderClicked} index="{index}" slideIndex="{slideIndex}" inputVideoUrl="{videoUrl}" inputVideoPoster="{item.slider_video_poster.Big.url}" height="h-screen"/>
    </div>

    <!-- Info area which scrolls up -->
    <div class="info relative z-20 w-screen h-screen">
        <div class="info-child w-full bg-white w-screen border-lines border-t">
            <InfoBoxes item={item} />
        </div>
    </div>
</div>

<style lang="postcss">
    .slide::-webkit-scrollbar {
        display: none;
    }

    /* Styling of info area */
	.info {
		padding-top: 100vh;
        pointer-events: none;
    }

    .info-child {
        pointer-events: all;
    }
</style>