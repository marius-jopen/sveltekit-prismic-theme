<script>
	export let data
</script>

<div class="hidden sm:flex fixed w-full z-50 justify-between py-3 px-4 border-b border-lines bg-background">
    <a sveltekit:prefetch class="text-lg textHoverGrey" href="/">
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

<div class="text-lg py-3 hidden sm:block">
	&nbsp;
</div>