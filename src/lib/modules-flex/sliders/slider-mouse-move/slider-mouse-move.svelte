<script>
    // Import child components which are used in this slider
    import SliderMouseMoveItem from '$lib/modules-flex/sliders/slider-mouse-move/slider-mouse-move-item.svelte'

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

    // Define variables which are needed for calculating the mouse-move function
    // and the size of the images
    let outerWidth
    let mouseX
    let divided = 2 // Visible slides on desktop
    let itemWidthVirtual
    let number
    let windowWidth
    let itemWidth
    let totalWidth
    let factor
    let result

    // Make variables reactive
    
    // Visible slides on desktop
    $: if(outerWidth > 1000) {
        divided = 2
    }

    // Visible slides on mobile
    $: if(outerWidth < 1000) {
        divided = 3
    }

    // Calculations about the size of the items
    $: itemWidthVirtual = 100 / divided
    $: number = loop.length
    $: windowWidth
    $: itemWidth = windowWidth / divided
    $: totalWidth = itemWidth * number
    $: factor = (number / divided) - 1
    $: result = (-1) * mouseX * factor;

    // Function which gets called when the mouse moves
    function handleMousemove(event) {
		mouseX = event.clientX
	}
</script>

<!-- Get width of window -->
<svelte:window bind:outerWidth={outerWidth}/>

<div class="border-b border-lines w-screen parent overflow-x-scroll md:overflow-x-hidden" bind:clientWidth={windowWidth} on:mousemove={handleMousemove}>
    <div class="children flex" style="width: {totalWidth}px; margin-left: {result}px;">
        {#each loop as item}
            <SliderMouseMoveItem item={item} itemWidthVirtual={itemWidthVirtual} />
        {/each}
    </div>
</div>