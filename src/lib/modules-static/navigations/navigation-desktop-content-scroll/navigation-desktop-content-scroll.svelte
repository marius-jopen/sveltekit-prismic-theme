<script>
	// Import the fly animation from Svelte
	import { fly } from 'svelte/transition';

	// Get data from parent component. Probably from the setup page
	export let data

	// Variables which are used for the functionality of this comp
	let height // Gets used to define the height of the invisible bar and also how much the items are floating up when they hide
	let scrollingDown = true
	let y = 0
	let lastY = 0

	// Make variables reactive
	$: y, updateScroll()

	$: scrollingDown

	// Function which detects the scroll direction
	function updateScroll() {
		let dy = lastY - y

		// Make sure that the content is visible when the page gets loaded
		if (y < 1) {
			scrollingDown = true
		}
		
		lastY = y

		//  Checks if scrolling up or down
		if (dy < 0) {
			scrollingDown = false
		} else {
			scrollingDown = true
		}
	}
</script>

<svelte:window bind:scrollY={y} />

<div bind:clientHeight={height} class="text-lg py-3 hidden sm:flex fixed w-full z-50 justify-between px-4 border-b border-lines bg-background">
    <a sveltekit:prefetch class="textHoverGrey" href="/">
        {data.website_title[0].text}
    </a>

	{#if scrollingDown}
		<div transition:fly="{{ y: -height, duration: 500 }}">
			{#each data.navigation_top as navItem}
				{#if navItem.uid[0]}
					<a sveltekit:prefetch class="ml-4 text-lg textHoverGrey" href="/{navItem.uid[0].text}">
						{navItem.title[0].text}
					</a>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<!-- Invisible bar which hads the same height as the navigation to push the content down -->
<div style="height: {height}px" class="hidden sm:block">
	&nbsp;
</div>