<script>
	// Import child components which are used in this module
	import OverlayItemContent from '$lib/modules-static/repeater/loops/overlay/overlay-item-content.svelte'
	
	// Import the Body function which allows us to change the body tag
	import { Body } from 'svelte-body';

	// Get data from parent component
    export let item

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

<div on:click="{openFullscreen}" data-sveltekit-prefetch class="textHoverGrey cursor-pointer w-full border-lines border-b p-4">
	<div class="text-xl">
		{item.data.title[0].text}
	</div>
</div>

<!-- Fullscreen area -->
{#if fullscreen == true}
	<div class="fixed w-full h-screen bg-white/50 z-50 top-0 left-0 backdrop-blur-lg" >
		<div class="fixed top-1 right-2 pt-2 pr-4 cursor-pointer" on:click="{closeFullscreen}">
			<!-- SVG X -->
			<svg id="Ebene_1" class="h-8" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
				<defs><style>.cls-1{fill:none;stroke:black;stroke-miterlimit:10;stroke-width:2px;}</style></defs><line class="cls-1" x1="1.91" y1="1.91" x2="23.09" y2="23.09"/><line class="cls-1" x1="1.91" y1="23.09" x2="23.09" y2="1.91"/>
			</svg>
		</div>
		
		<div>
			<OverlayItemContent item={item} />
		</div>
	</div>
{/if}