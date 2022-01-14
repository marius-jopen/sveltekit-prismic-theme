<script>
	export let slice
    export let inputNavigation

	let navigation

	if (slice == undefined){
		navigation = inputNavigation
	} else {
		navigation = slice.items
	}

	let linkIndex = 0
</script>

<div class="h-screen relative">
	<div class="text-center flex flex-col h-full justify-center">
		{#each navigation as item, navIndex}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<a on:mouseover={e => linkIndex = navIndex} class="text-white text-2xl textHoverGrey" sveltekit:prefetch href="/{item.slug[0].text}">
				{item.name[0].text}
			</a>
		{/each}
	</div>

	{#each navigation as item, navIndex}
		<div class="hidden w-full h-full absolute top-0 left-0 -z-10" class:active="{navIndex === linkIndex}" >
			<img src="{item.image.Big.url}" alt="{item.image.alt}" class="w-full h-full object-cover">
		</div>
	{/each}
</div>

<style lang="postcss">
    .active {
        display: block !important;
    }
</style>