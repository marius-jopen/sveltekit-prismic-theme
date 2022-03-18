<script>
    // Import the Splide slider library
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';

    // Import child components which are used in this slider
	import SliderFullscreenImageItem from '$lib/modules-flex/sliders/slider-fullscreen-image/slider-fullscreen-image-item.svelte'

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
	let splideSlider
	let totalSlides = loop.length
    let slideIndex = 0

	// Change slide number index
	// Gets used for the arrows and also to pass the index into each slide
	// When the index changes, then the video gets paused
	function slideMove(e) {	
		slideIndex = e.detail.index
	}

	// Two functions to trigger the previous and next slide on click
	function prevSlide() {
		splideSlider.splide.go( '<' );
	}

	function nextSlide() {
		splideSlider.splide.go( '>' );
	}
</script>

<div class="relative">
    <Splide
    bind:this={splideSlider}
    on:move={ e => {slideMove(e)} }
    options={{
        height: '100vh',
        type: 'fade',
        focus: 'center',
        pagination: false,
        arrows: false,
    }}>
        {#each loop as item}
            <SplideSlide>
                <SliderFullscreenImageItem item={item} />
            </SplideSlide>
        {/each}
    </Splide>
    
    <!-- Only show when more than 1 slider -->
    {#if totalSlides > 1}
        {#if !(slideIndex == 0 || slideIndex == null)}
            <!-- Arrow Previous -->
            <div class="arrow-left" on:click={prevSlide}>
                <svg class="h-6 rotate-180 opacity-0 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.53 20.05"><defs><style>.cls-1{fill:none;stroke:white;stroke-miterlimit:10;stroke-width:2px;}</style></defs><g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1"><line class="cls-1" y1="10.02" x2="29.95" y2="10.02"/><polyline class="cls-1" points="20.8 19.34 30.12 10.02 20.8 0.71"/></g></g></svg>
            </div>
        {/if}
    
        {#if !(slideIndex == (totalSlides - 1))}
            <!-- Arrow Next -->
            <div class="arrow-right" on:click={nextSlide}>
                <svg class="h-6 opacity-0 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.53 20.05"><defs><style>.cls-1{fill:none;stroke:white;stroke-miterlimit:10;stroke-width:2px;}</style></defs><g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1"><line class="cls-1" y1="10.02" x2="29.95" y2="10.02"/><polyline class="cls-1" points="20.8 19.34 30.12 10.02 20.8 0.71"/></g></g></svg>
            </div>
        {/if}
    {/if}
</div>

<style lang="postcss">
	/* Positioning of arrows */
	.arrow-left {
        @apply z-20 absolute left-0 p-4 cursor-pointer;
		top: calc(50% - 20px);
	}

	.arrow-left:hover svg {
		opacity: 1 !important;
	}

	.arrow-right {
        @apply z-20 absolute right-0 p-4 cursor-pointer;
		top: calc(50% - 20px);
	}

	.arrow-right:hover svg {
		opacity: 1 !important;
	}
</style>