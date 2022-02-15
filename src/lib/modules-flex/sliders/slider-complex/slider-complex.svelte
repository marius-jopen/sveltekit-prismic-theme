<script>
	// Import the Body function which allows us to change the body tag
	import { Body } from 'svelte-body';

	// Import the Splide slider library
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';

	// Import child components which are used in this slider
    import SliderComplexItem from '$lib/modules-flex/sliders/slider-complex/slider-complex-item.svelte'
	import SliderComplexOverlay from '$lib/modules-flex/sliders/slider-complex/slider-complex-overlay.svelte'

	// Get data from parent component or from Slice function
    export let slice
    export let inputLoop

	// Define variables which get used in this component
	let loop

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		loop = inputLoop
	} else {
		loop = slice.items
	}

	// define variables which are needed for the functionality of this component
	let fullscreen = false
	let locked = ""

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

<div class="relative">
	<Splide
	options={{
		type: 'loop',
		focus: 'center',
		pagination: false,
		classes: {
			arrows: 'splide__arrows your-class-arrows',
			arrow : 'splide__arrow your-class-arrow',
			prev  : 'splide__arrow--prev your-class-prev',
			next  : 'splide__arrow--next your-class-next',
		},
	}}>
		{#each loop as item}
			<SplideSlide>
				<SliderComplexItem item={item} />
			</SplideSlide>
		{/each}
	</Splide>

	<!-- Fullscreen Button -->
	<div class="absolute bottom-1 left-2 p-1 cursor-pointer" on:click="{openFullscreen}">
		Button
	</div>
</div>

<!-- Fullscreen area -->
{#if fullscreen == true}
	<div class="fixed w-full h-screen bg-white/50 z-50 top-0 left-0 backdrop-blur-lg" >
		<div class="fixed top-1 right-2 p-1 cursor-pointer" on:click="{closeFullscreen}">
			Close
		</div>
		
		<div class="">
			<SliderComplexOverlay loop={loop} />
		</div>
	</div>
{/if}

<style>
	:global(.splide__arrow) {
		background: rgb(225, 225, 225);
	}
</style>