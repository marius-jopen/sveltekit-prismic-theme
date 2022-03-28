<script>
    // Import mount function to control the mute and autoplay
	import { onMount } from 'svelte'

    // Get data from parent Component
    export let loop

    // Define variables which get used in this component
    let video
    let paused

    // Sets video volume to 0 on load and activates autoplay
	onMount(() => {
      video.volume = 0;
      paused = false
    }) 
	
	// Sets video volume to 0 on load
    function videoMute() {
        video.volume = 0
    }
</script>

<div class="w-screen overflow-y-scroll h-screen pt-4 pb-10">
    {#each loop as item}
        <div class="pt-10 px-12">
            <img src="{item.slider_complex_image.Big.url}" alt="{item.slider_complex_image.alt}">

            {#if item.slider_complex_caption[0]}
                <div class="pt-1">
                    {item.slider_complex_caption[0].text}
                </div>
            {/if}
        </div>
    {/each}
</div>