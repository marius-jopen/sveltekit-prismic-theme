<script>
    // Get data from parent component
    export let item
    export let heightVh
    export let type

    // Define variables which are used in the slider
    let active
    let currentTime
    let textColor 
    let muted = true
    
    // Gets the height from root-parent and divides it by two
    // also adds 2px to avoid the grey / white line
    let relatedStyling = 'height: calc(' + heightVh / 2 + 'vh + 2px);' 

    // Check project brightness and adjust text color
    if(item.data.brightness == false || item.data.brightness == null ) {
        textColor = "text-fonts"
    } else {
        textColor = "text-fonts-invert"
    }

    // Reset video and hide overlay
    function start() {
        currentTime = 0
        active = true
	}

    // Reset video and show overlay
    function stop() {
        currentTime = 0
        active = false
    }
</script>

<a href="/{type}s/{item.uid}" style="{relatedStyling}" class="{textColor} block relative w-1/2 related-item" on:mouseenter="{start}" on:mouseleave="{stop}">
    <!-- Video -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:currentTime class="h-full w-full object-cover" poster="{item.data.preview_video_poster.Medium.url}" playsinline autoplay loop bind:muted >
        <source src={((item.data.preview_video_link[0]) ? item.data.preview_video_link[0].text : item.data.preview_video.url)} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <!-- Overlay image whill will be removed when the mouse is on top -->
    <img src="{item.data.preview_video_poster.Medium.url}" alt="Related Item" class="image-{active} w-full h-full absolute top-0 left-0">

    <!-- Text overlay -->
    <div class="absolute h-full w-full top-0 left-0 flex flex-col justify-end">
        <div class="text-xl py-4 px-4">
            {item.data.title[0].text}
        </div>
    </div>
</a>

<style>
    /* Remove the overlay image */
    .image-true {
		opacity: 0 !important;
	}
</style>