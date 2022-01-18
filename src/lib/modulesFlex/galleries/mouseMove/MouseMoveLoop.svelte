<script>
    import MouseMoveitem from '$lib/modulesFlex/galleries/mouseMove/MouseMoveItem.svelte'

    export let slice
    export let inputLoop

	let loop

	if (slice == undefined){
		loop = inputLoop
	} else {
		loop = slice.items
	}

    let outerWidth
    let mouseX
    let divided
    let itemWidthVirtual
    let number
    let windowWidth
    let itemWidth
    let totalWidth
    let factor
    let result

    $: divided = 3
    $: if(outerWidth > 1000) {
        divided = 2
    }
    $: if(outerWidth < 1000) {
        divided = 3
    }
    $: itemWidthVirtual = 100 / divided
    $: number = loop.length
    $: windowWidth
    $: itemWidth = windowWidth / divided
    $: totalWidth = itemWidth * number
    $: factor = (number / divided) - 1
    $: result = (-1) * mouseX * factor;

    function handleMousemove(event) {
		mouseX = event.clientX
	}
</script>

<svelte:window bind:outerWidth={outerWidth}/>

<div class="border-b border-lines w-screen parent overflow-x-scroll md:overflow-x-hidden" bind:clientWidth={windowWidth} on:mousemove={handleMousemove}>
    <div class="children flex" style="width: {totalWidth}px; margin-left: {result}px;">
        {#each loop as item}
            <MouseMoveitem item={item} itemWidthVirtual={itemWidthVirtual} />
        {/each}
    </div>
</div>