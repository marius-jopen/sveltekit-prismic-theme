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
	<div class="absolute bottom-1 left-1 p-1 cursor-pointer" on:click="{openFullscreen}">
		<!-- SVG Arrow -->
		<svg id="Ebene_1" class="h-8" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<defs><style>.cls-1{fill:none;stroke:black;stroke-miterlimit:10;stroke-width:2px;}</style></defs><line class="cls-1" x1="1.85" y1="23.15" x2="23.03" y2="1.97"/><polyline class="cls-1" points="23.15 15.03 23.15 1.85 9.97 1.85"/>
		</svg>
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