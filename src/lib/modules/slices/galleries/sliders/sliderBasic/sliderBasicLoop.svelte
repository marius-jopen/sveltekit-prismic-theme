<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';
    import SliderBasicItem from '$lib/modules/slices/galleries/sliders/sliderBasic/sliderBasicItem.svelte'

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
	}}>
	{#each loop as item}
		<SplideSlide>
			<SliderBasicItem item={item} />
		</SplideSlide>
		{/each}
	</Splide>
</div>