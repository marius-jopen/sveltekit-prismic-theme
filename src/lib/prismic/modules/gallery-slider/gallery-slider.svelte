<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
	import '@splidejs/splide/dist/css/splide.min.css'
	import { asText, isFilled } from '@prismicio/helpers'
	import Image from "$lib/prismic/atoms/image.svelte"

	export let input

	let splideSlider
	let slideIndex = 1
	let totalSlides = input.length
	let currentCaption = ''
	let sliderRatio = 1

	getCaption(0)

	// Two functions to trigger the previous and next slide on click
	function prevSlide() {
		splideSlider.splide.go('<')
	}

	function nextSlide() {
		splideSlider.splide.go('>')
	}

	// Function which gets called when the slider moves
	function slideMove(e) {
		slideIndex = e.detail.index + 1
		getCaption(e.detail.index)
	}

	//  Function which get the current caption
	function getCaption(key) {
		if (isFilled.richText(input[key].image_caption_gallery)) {
			currentCaption = asText(input[key].image_caption_gallery)
		} else {
			currentCaption = ''
		}
	}
</script>

<div class="relative">
	<Splide
	bind:this={splideSlider}
	on:move={ e => {slideMove(e)} }
	options={{
		type: 'input',
		keyboard: true,
		focus: 'center',
		heightRatio: sliderRatio,
		pagination: false,
		type   : 'loop',
		arrows: false,
		classes: {
			arrows: 'splide__arrows your-class-arrows',
			arrow : 'splide__arrow your-class-arrow',
			prev  : 'splide__arrow--prev your-class-prev',
			next  : 'splide__arrow--next your-class-next',
		}
	}}>
		{#each input as item}
			<SplideSlide>
				<Image src={item.image_gallery} classes='h-full object-cover' classesOuter='h-full' />
			</SplideSlide>
		{/each}
	</Splide>

	{#if totalSlides > 1}
		<div on:click={prevSlide} class="-mt-6 absolute top-0 left-0 w-1/2 p-1 cursor-pointer z-10 h-full flex justify-center flex-col opacity-0 hover:opacity-100 transition-opacity duration-300">
			<div class="pl-2 flex justify-start">
				<svg class="h-6 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.53 20.05"><defs><style>.cls-1{fill:none;stroke:white;stroke-miterlimit:10;stroke-width:2px;}</style></defs><g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1"><line class="cls-1" y1="10.02" x2="29.95" y2="10.02"/><polyline class="cls-1" points="20.8 19.34 30.12 10.02 20.8 0.71"/></g></g></svg>
			</div>
		</div>

		<div on:click={nextSlide} class="-mt-6 absolute top-0 right-0 w-1/2 p-1 cursor-pointer z-10 h-full flex justify-center flex-col opacity-0 hover:opacity-100 transition-opacity duration-300">
			<div class="pr-2 flex justify-end">
				<svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.53 20.05"><defs><style>.cls-1{fill:none;stroke:white;stroke-miterlimit:10;stroke-width:2px;}</style></defs><g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1"><line class="cls-1" y1="10.02" x2="29.95" y2="10.02"/><polyline class="cls-1" points="20.8 19.34 30.12 10.02 20.8 0.71"/></g></g></svg>
			</div>
		</div>
	{/if}

	<div class="px-6 flex w-full justify-between bg-background border-lines border-b py-2">
		<div>
			{currentCaption}
		</div>

		{#if totalSlides > 1}
			<div>
				{slideIndex} / {totalSlides}
			</div>
		{/if}
	</div>
</div>