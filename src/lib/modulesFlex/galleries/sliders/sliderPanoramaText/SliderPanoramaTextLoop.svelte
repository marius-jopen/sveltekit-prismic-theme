<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';
    import SliderPanoramaTextItem from '$lib/modulesFlex/galleries/sliders/sliderPanoramaText/SliderPanoramaTextItem.svelte'

    export let slice
    export let inputLoop

	let loop

	if (slice == undefined){
		loop = inputLoop
	} else {
		loop = slice.items
	}
</script>

<div class="sliderPanoramaText border-b border-lines">
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
				<SliderPanoramaTextItem item={item} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	:global(.sliderPanoramaText .splide__arrow) {
		background: rgb(225, 225, 225);
	}

	:global(.sliderPanoramaText .splide__pagination__page) {
		background: rgb(225, 225, 225);
	}

	:global(.sliderPanoramaText .splide__pagination__page.is-active) {
		background: rgb(225, 225, 225);
	}
</style>