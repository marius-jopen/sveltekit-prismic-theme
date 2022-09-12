<script>
	// Get data from parent component. Probably from the setup page
	export let data
	export let layers
	export let classes

	// Classes which are connected to the height of the navigation
	// let height = 'text-xs py-1.5'
</script>

<div class="fixed top-0 w-full hidden sm:block z-20">
	<div class="{classes}">
		<a data-sveltekit-prefetch class="textHoverGrey" href="/">
			{data.website_title[0].text}
		</a>
	</div>
	
	<div class="{classes}">
		{#each data.navigation_top as navItem}
			{#if navItem.uid[0]}
				<a data-sveltekit-prefetch class="mr-4 textHoverGrey" href="/{navItem.uid[0].text}">
					{navItem.title[0].text}
				</a>
			{/if}
		{/each}
	</div>

	{#if layers == 2}
		<div class="{classes}">
			<slot></slot>
		</div>
	{/if}
</div>

<!-- Invisible bar which hads the same height as the navigation to push the content down -->
{#if layers == 1}
	<div class="{classes} hidden sm:block">
		&nbsp;
	</div>

	<div class="{classes} hidden sm:block">
		&nbsp;
	</div>
{/if}

{#if layers == 2}
	<div class="{classes} hidden sm:block">
		&nbsp;
	</div>

	<div class="{classes} hidden sm:block">
		&nbsp;
	</div>

	<div class="{classes} hidden sm:block">
		&nbsp;
	</div>
{/if}