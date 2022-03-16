<script>
	// Get data from parent component. Probably from the setup page
	export let data

	// Classes which are connected to the height of the navigation
	let height = 'text-sm py-3 '
</script>

<div class="fixed top-0 w-full hidden sm:block z-20">
	<div class="{height} border-b border-lines bg-background px-4">
		<a sveltekit:prefetch class="textHoverGrey" href="/">
			{data.website_title[0].text}
		</a>
	</div>
	
	<div class="{height} border-b border-lines bg-background">
		{#each data.navigation_top as navItem}
			<a sveltekit:prefetch class="ml-4 textHoverGrey" href="/{navItem.uid[0].text}">
				{navItem.title[0].text}
			</a>
		{/each}
	</div>
</div>

<!-- Invisible bar which hads the same height as the navigation to push the content down -->
<div class="hidden sm:block">
	&nbsp;
</div>

<div class="hidden sm:block">
	&nbsp;
</div>