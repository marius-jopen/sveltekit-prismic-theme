<script>
	// Get data from parent component. Probably from the setup page
	export let data
</script>

<div class="hidden sm:flex w-full justify-between py-3 px-4 bg-background">
    <a data-sveltekit-prefetch class="text-lg textHoverGrey" href="/">
        {data.website_title[0].text}
    </a>

    <div>
		{#each data.navigation_bottom as navItem}
			{#if navItem.uid1[0]}
				<a data-sveltekit-prefetch class="ml-4 text-lg textHoverGrey" href="/{navItem.uid1[0].text}">
					{navItem.title[0].text}
				</a>
			{/if}
		{/each}
	</div>
</div>