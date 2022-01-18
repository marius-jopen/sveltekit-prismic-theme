<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';
    import SliderBasicItem from '$lib/modulesFlex/galleries/sliders/sliderBasic/SliderBasicItem.svelte'

    export let slice
    export let inputLoop

	let loop

	if (slice == undefined){
		loop = inputLoop
	} else {
		loop = slice.items
	}
</script>

<div class="border-b border-lines">
	<Splide
	options={{
		type: 'loop',
		focus: 'center',
		classes: {
			arrows: 'splide__arrows your-class-arrows',
			arrow : 'splide__arrow your-class-arrow',
			prev  : 'splide__arrow--prev your-class-prev',
			next  : 'splide__arrow--next your-class-next',
		},
	}}>
		{#each loop as item}
			<SplideSlide>
				<SliderBasicItem item={item} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	:global(.splide__arrow) {
		background: rgb(225, 225, 225);
	}

	:global(.splide__pagination__page) {
		background: rgb(225, 225, 225);
	}

	:global(.splide__pagination__page.is-active) {
		background: rgb(225, 225, 225);
	}
</style>