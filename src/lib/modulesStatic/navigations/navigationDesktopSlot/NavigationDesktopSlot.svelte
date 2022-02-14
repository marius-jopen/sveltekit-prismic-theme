<script>
    // Get data from parent component. Probably from the setup page
	export let data

    // Classes which are connected to the height of the navigation
	let height = 'text-lg py-3 '
</script>

<div class="{height} hidden sm:flex fixed w-full z-20 justify-between px-4 border-b border-lines bg-background">
    <div class="absolute left-4 z-30" >
        <!-- The left side of the navigation bar can be willed with content via a slot -->
        <slot></slot>
    </div>

    <div class="relative justify-center w-screen z-10 left-0 flex textHoverGrey" >
        <a sveltekit:prefetch href="/">
			{data.website_title[0].text}
        </a>
    </div>

    <div class="absolute right-4 z-20">
        {#each data.navigation_top as navItem}
			<a sveltekit:prefetch class="ml-4 textHoverGrey" href="/{navItem.uid[0].text}">
				{navItem.title[0].text}
			</a>
		{/each}
    </div>
</div>

<!-- Invisible bar which hads the same height as the navigation to push the content down -->
<div class="{height} hidden sm:block">
	&nbsp;
</div>