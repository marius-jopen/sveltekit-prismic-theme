<script>
	// Get data from parent component. Probably from the setup page
	export let data

	// Classes which are connected to the height of the navigation
	let height = 'text-lg py-3 '
</script>

<div class="{height} hidden sm:flex fixed w-full z-50 justify-between px-4 border-b border-lines bg-background">
    <a sveltekit:prefetch class="textHoverGrey" href="/">
        {data.website_title[0].text}
    </a>

    <div>
		{#each data.navigation_top as navItem}
			<a sveltekit:prefetch class="ml-4 text-lg textHoverGrey" href="/{navItem.uid[0].text}">
				{navItem.title[0].text}
			</a>
		{/each}
	</div>
</div>

<!-- Invisible bar which hads the same height as the navigation to push the content down -->
<div class="{height} hidden sm:block">
	&nbsp;
</div>