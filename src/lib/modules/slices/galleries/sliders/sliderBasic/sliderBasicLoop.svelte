<script>
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

<div class="border-b border-lines w-screen parent overflow-x-scroll md:overflow-x-hidden" bind:clientWidth={windowWidth} on:mousemove={handleMousemove}>
	{#each loop as item}
		<SliderBasicItem />
	{/each}
</div>