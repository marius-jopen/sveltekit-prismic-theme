<script>
	// Get data from parent component. Probably from the setup page
	export let data
	export let classes

	// Define used variables
	let totalItems = data.navigation_top.length

	// Back Button X
	function back() {
		history.back()
	}
</script>

<div class="{classes} fixed top-0 z-20 left-0 w-full justify-start px-3 uppercase py-1.5">
    <a data-sveltekit-prefetch class="text-lg textHoverGrey" href="/">
        {data.website_title[0].text} / 
    </a>

	{#each data.navigation_top as navItem, index}
		{#if navItem.uid[0]}
			<a data-sveltekit-prefetch class="text-lg textHoverGrey" href="/{navItem.uid[0].text}">
				{navItem.title[0].text} {(index == totalItems - 1) ? '' : '/'}
			</a>
		{/if}
	{/each}
</div>

<div class="fixed top-1 right-2 pt-2 pr-4 cursor-pointer z-20" on:mousedown={back} >
	<!-- SVG X -->
	<svg id="Ebene_1" class="h-4" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
		<defs><style>.cls-1{fill:none;stroke:white;stroke-miterlimit:15;stroke-width:3px;}</style></defs><line class="cls-1" x1="1.91" y1="1.91" x2="23.09" y2="23.09"/><line class="cls-1" x1="1.91" y1="23.09" x2="23.09" y2="1.91"/>
	</svg>
</div>