<script>
    // Import mount function
    import { onMount } from 'svelte'

    // Get data from parent 
    export let inputVideo
    export let inputVideoPoster
    export let inputClasses

    let video
    let paused

    onMount(() => {
        if(inputVideo) {
            video.volume = 0;
            paused = false
        }
    }) 

    function videoMute() {
        if(inputVideo) {
            video.volume = 0
        }
    }
</script>

{#if inputVideo}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video on:load="{videoMute}" bind:paused bind:this={video} class="{inputClasses}" poster="{inputVideoPoster}" playsinline loop >
        <source src={inputVideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
{/if}