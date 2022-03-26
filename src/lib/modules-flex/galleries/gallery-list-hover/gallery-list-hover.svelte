<script>
    // Import child components which are used in this slider
    import GalleryListHoverItem from '$lib/modules-flex/galleries/gallery-list-hover/gallery-list-hover-item.svelte'

	// Import the fade effect from Svelte
	import { fade } from 'svelte/transition'

    // Get data from parent component or from Slice function
    export let slice
    export let inputLoop
	export let inputBackgroundColor

    // Define variables which get used in this component to detect if it is a slice or a manual module
	let loop
	let backgroundColor

    // Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		loop = inputLoop
		backgroundColor = inputBackgroundColor[0].text

	} else {
		loop = slice.items
	}

	// Define variables which get used in this comp
	let passedUp
</script>

<div class="border-lines border-b" style="background-color: #{backgroundColor};">
    <div class="relative sm:pt-8 z-10" >
		{#each loop as item}
			<GalleryListHoverItem item={item} bind:value={passedUp} />
		{/each}
    </div>
  
	<!-- If an image inside the loop gets hovered, the hover image gets passed up and will be displayed here -->
    {#if passedUp}
		<div transition:fade>
			{@html passedUp}
		</div>
    {/if}
</div>