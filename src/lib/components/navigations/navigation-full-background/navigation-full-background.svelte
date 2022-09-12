<script>
	// Get data from parent component or from Slice function
	export let slice
    export let inputNavigation
	export let inputMobileImage

	// Define variables which get used in this component
	let navigationLoop
	let imageMobile

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		navigationLoop = inputNavigation
		imageMobile = inputMobileImage
	} else {
		navigationLoop = slice.items
		imageMobile = slice.primary.mobile_image
	}
	
	// Define index variable and set it to 0 to start witht he first image in the list
	let linkIndex = 0
	let navIndex

	$: navIndex

	function changeImage(navIndex) {
		linkIndex = navIndex
	}
</script>

<div class="h-screen relative border-b border-lines">
	<!-- Navigation -->
	<div class="text-center flex flex-col h-full justify-center">
		{#each navigationLoop as item, navIndex}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<a on:mouseover={e => changeImage(navIndex)} class="relative z-10 text-white text-2xl textHoverGrey" href="/{item.navigation_full_background_loop_link[0].text}">
				{item.navigation_full_background_loop_title[0].text}
			</a>
		{/each}
	</div>

	<!-- Image Desktop -->
	<div class="hidden sm:block">
		{#each navigationLoop as item, navIndex}
			<div class="hidden w-full h-full absolute top-0 left-0 z-0" class:active="{navIndex == linkIndex}" >
				{#if item.navigation_full_background_loop_image.Big.url}
					<img src="{item.navigation_full_background_loop_image.Big.url}" alt="{item.navigation_full_background_loop_image.alt}" class="w-full h-full object-cover">
				{/if}
			</div>
		{/each}
	</div>

	<!-- Image Mobile -->
	{#if imageMobile.Big}
		<img src="{imageMobile.Big.url}" alt="{imageMobile.alt}" class="sm:hidden w-full h-full absolute top-0 left-0 z-0 object-cover">
	{/if}
</div>

<style lang="postcss">
    .active {
        display: block !important;
    }
</style>