<script>
	// Get data from parent component. Probably from the setup page
	export let data
	export let layers

	// Classes which are connected to the height of the navigation
	let height = 'text-xs py-1.5'
</script>

<div class="fixed top-0 w-full hidden sm:block z-20 uppercase tracking-widest">
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

	{#if layers == 2}
		<div class="{height} bg-background px-4">
			<slot></slot>
		</div>
	{/if}
</div>

<!-- Invisible bar which hads the same height as the navigation to push the content down -->
{#if layers == 1}
	<div class="{height} hidden sm:block">
		&nbsp;
	</div>
{/if}

{#if layers == 2}
	<div class="{height} hidden sm:block">
		&nbsp;
	</div>

	<div class="{height} hidden sm:block">
		&nbsp;
	</div>
{/if}