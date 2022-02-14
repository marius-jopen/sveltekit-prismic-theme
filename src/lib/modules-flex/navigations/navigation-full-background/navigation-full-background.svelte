<script>
	// Get data from parent component or from Slice function
	export let slice
    export let inputNavigation
	export let inputMobileImage

	// Define variables which get used in this component
	let navigation
	let image

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		navigation = inputNavigation
		image = inputMobileImage
	} else {
		navigation = slice.items
		image = slice.primary.mobile_image
	}
	
	// Define index variable and set it to 0 to start witht he first image in the list
	let linkIndex = 0
</script>

<div class="h-screen relative border-b border-lines">
	<!-- Navigation -->
	<div class="text-center flex flex-col h-full justify-center">
		{#each navigation as item, navIndex}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<a on:mouseover={e => linkIndex = navIndex} class="text-white text-2xl textHoverGrey" sveltekit:prefetch href="/{item.slug[0].text}">
				{item.name[0].text}
			</a>
		{/each}
	</div>

	<!-- Image Desktop -->
	<div class="hidden sm:block">
		{#each navigation as item, navIndex}
			<div class="hidden w-full h-full absolute top-0 left-0 -z-10" class:active="{navIndex === linkIndex}" >
				{#if item.image.Big}
					<img src="{item.image.Big.url}" alt="{item.image.alt}" class="w-full h-full object-cover">
				{/if}
			</div>
		{/each}
	</div>

	<!-- Image Video -->
	{#if image.Big}
		<img src="{image.Big.url}" alt="{image.alt}" class="sm:hidden w-full h-full absolute top-0 left-0 -z-10 object-cover">
	{/if}
</div>

<style lang="postcss">
    .active {
        display: block !important;
    }
</style>