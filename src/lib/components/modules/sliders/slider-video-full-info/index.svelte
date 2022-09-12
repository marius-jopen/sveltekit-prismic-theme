<script>
	// Import the Splide slider library
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
	import '@splidejs/splide/dist/css/splide.min.css'

	// Import the store for passing props to other comps
	import { filmControlStatus } from '$lib/components/functionality/store/store'

	// Import child components which are used in this slider
    import SliderVideoFullInfoItemContent from '$lib/modules-flex/sliders/slider-video-full-info/slider-video-full-info-item-content.svelte'
	import SliderVideoFullInfoItemInfo from '$lib/modules-flex/sliders/slider-video-full-info/slider-video-full-info-item-info.svelte'

	// Get data from parent component or from Slice function
    export let slice
    export let inputLoop
	
	let loop
	
	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		loop = inputLoop
	} else {
		loop = slice.items
	}

	// Define variables which get used in this component
	let slideIndex = 0 // Current slide (Gets updated later on)
	let splideSlider
	let splideSliderInfo
	let totalSlides = loop.length
	let sliderClicked = false
	
	// Change slide number index
	// Gets used for the arrows and also to pass the index into each slide
	// When the index changes, then the video gets paused

	function slideMove(e) {	
		if(e.detail.prev > e.detail.index) {
			splideSliderInfo.splide.go( '<' );
		} else {
			splideSliderInfo.splide.go( '>' );
		}
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

<div class="relative w-screen h-screen">
	<!-- Slider -->
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
		{#each loop as item, index}
			<SplideSlide>
				<SliderVideoFullInfoItemContent sliderClicked={sliderClicked} item={item} slideIndex={slideIndex} index={index}/>
			</SplideSlide>
		{/each}
	</Splide>

	<!-- Only show when more than 1 slider -->
	{#if totalSlides > 1}
		{#if !(slideIndex == 0 || slideIndex == null)}
			<!-- Arrow Previous -->
			<div class="arrow-left controls-{$filmControlStatus}" on:click={prevSlide}>
				<!-- <svg class="h-6 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.53 20.05"><defs><style>.cls-1{fill:none;stroke:white;stroke-miterlimit:10;stroke-width:2px;}</style></defs><g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1"><line class="cls-1" y1="10.02" x2="29.95" y2="10.02"/><polyline class="cls-1" points="20.8 19.34 30.12 10.02 20.8 0.71"/></g></g></svg> -->
				<div class="bg-white h-3 w-3 rounded-full hover:scale-150">
				</div>
			</div>
		{/if}

		{#if !(slideIndex == (totalSlides - 1))}
			<!-- Arrow Next -->
			<div class="arrow-right controls-{$filmControlStatus}" on:click={nextSlide}>
				<!-- <svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.53 20.05"><defs><style>.cls-1{fill:none;stroke:white;stroke-miterlimit:10;stroke-width:2px;}</style></defs><g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1"><line class="cls-1" y1="10.02" x2="29.95" y2="10.02"/><polyline class="cls-1" points="20.8 19.34 30.12 10.02 20.8 0.71"/></g></g></svg> -->
				<div class="bg-white h-3 w-3 rounded-full hover:scale-150">
				</div>
			</div>
		{/if}
	{/if}
</div>

<!-- Slider which contains the info area -->
<div class="w-full">
	<Splide
	bind:this={splideSliderInfo}
	on:move={ e => {slideMove(e)} }
	options={{
		height: 'h-screen',
		type: 'fade',
		focus: 'center',
		pagination: false,
		arrows: false,
	}}>
		{#each loop as item}
			<SplideSlide>
				<SliderVideoFullInfoItemInfo item={item} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style lang="postcss">
	/* Positioning of arrows */
	.arrow-left {
		position: absolute;
		left: 0px;
		top: calc(50% - 20px);
		padding: 20px;
		cursor: pointer;
	}

	.arrow-right {
		position: absolute;
		right: 0px;
		top: calc(50% - 20px);
		padding: 20px;
		cursor: pointer;
	}

	/* Hide arrows when the controls of the video are hidden */
	.controls-true {
		opacity: 0 !important;
	}
</style>