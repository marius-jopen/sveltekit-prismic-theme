<script>
	// Get data from parent component. Probably from the setup page
	export let data

	let totalItems = data.navigation_top.length
</script>

<div class="w-full justify-start px-3 uppercase bg-background py-1.5 border-b border-lines">
    <a sveltekit:prefetch class="text-lg textHoverGrey" href="/">
        {data.website_title[0].text} / 
    </a>

	{#each data.navigation_top as navItem, index}
		{#if navItem.uid[0]}
			<a sveltekit:prefetch class="text-lg textHoverGrey" href="/{navItem.uid[0].text}">
				{navItem.title[0].text} {(index == totalItems - 1) ? '' : '/'}
			</a>
		{/if}
	{/each}
</div>