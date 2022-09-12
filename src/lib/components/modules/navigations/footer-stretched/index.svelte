<script>
	// Get data from parent component. Probably from the setup page
	export let data
    export let classes
</script>

<div class="hidden sm:flex w-full justify-between {classes}">
    {#each data.navigation_bottom as navItem}
        {#if navItem.uid1[0]}
            <a data-sveltekit-prefetch class="textHoverGrey" href="/{navItem.uid1[0].text}">
                {navItem.title[0].text}
            </a>
        {/if}
    {/each}

    <a data-sveltekit-prefetch class="textHoverGrey" href="/">
        {data.website_title[0].text}
    </a>
</div>