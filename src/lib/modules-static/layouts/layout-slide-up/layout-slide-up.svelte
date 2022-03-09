<script>
    // Import child components which are used in this slider
	import InfoBoxes from '$lib/modules-flex/paragraphs/info-boxes/info-boxes.svelte'

    // Get data from parent Component
    export let item

    // Variables which are used for the functionality of this comp
	let y = 0
	let lastY = 0
	let infoHeight
	let marginTop = 0

	// Make variables reactive
	$: y, updateScroll()

	// Function which detects the scroll direction
	function updateScroll() {
		let dy = lastY - y

		// Make sure that the content is visible when the page gets loaded
		if (y < 1) {
			marginTop = 0
		}
		
		lastY = y

		//  Checks if scrolling up or down
		if (dy < 0) {
			marginTop = infoHeight
		} else {
			marginTop = 0
		}
	}
</script>

<svelte:window bind:scrollY={y} />

<div class="h-screen pointer-event-none"></div>

<div>
	<InfoBoxes item={item} />
</div>

<!-- <div bind:clientHeight={infoHeight} style="margin-top: -{marginTop}px;" class="infoBox relative z-20 bg-white bottom-0 left-0 w-full">
	<InfoBoxes item={item} />
</div>

<style lang="postcss">
	.infoBox {
		transition: margin-top 0.3s;
	}
</style> -->