<script>
    // Import child components which are used in this slider
    import GalleryListOverlaySliderItem from '$lib/modules-flex/galleries/gallery-list-overlay-slider/gallery-list-overlay-slider-item.svelte'
	import GalleryListOverlaySliderSlider from '$lib/modules-flex/galleries/gallery-list-overlay-slider/gallery-list-overlay-slider-slider.svelte'

	// Import the Body function which allows us to change the body tag
	import { Body } from 'svelte-body';

    // Get data from parent component or from Slice function
    export let slice
    export let inputLoop

    // Define variables which get used in this component to detect if it is a slice or a manual module
	let loop

    // Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		loop = inputLoop

	} else {
		loop = slice.items
	}

	// Define variables which get used in this component
	let keyCode
    let fullscreen = false
	let locked = ""

	// Function which gets called on keystroke and if it is the ECS key
	// close the fullscreen
	function handleKeydown(event) {
		if(keyCode = 27) {
			fullscreen = false
			locked = ""
		}
	}

	// Function which opens the fullscreen and locks the body
	function openFullscreen() {
        fullscreen = true
		locked = "overflow-y-hidden"
    }

	// Function which closes the fullscreen and unlocks the body
	function closeFullscreen() {
        fullscreen = false
		locked = ""
    }
</script>

<!-- Access the body and change the class -->
<Body class="{locked}" />

<!-- Access the window to get the keystrokes to close the fullscreen -->
<svelte:window on:keydown={handleKeydown}/>

<div class="relative">
	{#each loop as item}
		<GalleryListOverlaySliderItem item={item} />
	{/each}

	<div on:click="{openFullscreen}" class="absolute top-2 left-2 cursor-pointer">
		Fullscreen
	</div>
</div>

<!-- Fullscreen area -->
{#if fullscreen == true}
	<div class="fixed w-full h-screen bg-white/50 z-50 top-0 left-0 backdrop-blur-lg" >
		<div class="fixed top-1 right-2 pt-2 pr-4 cursor-pointer z-50" on:click="{closeFullscreen}">
			Close
		</div>
		
		<div>
			<GalleryListOverlaySliderSlider inputLoop={loop} />
		</div>
	</div>
{/if}