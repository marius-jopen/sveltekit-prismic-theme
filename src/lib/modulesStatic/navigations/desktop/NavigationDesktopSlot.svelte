<script>
	export let data
</script>

<div class="text-lg hidden sm:flex fixed w-full z-20 justify-between py-3 px-4 border-b border-lines bg-background">
    <div class="absolute left-4 z-30" >
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

<div class="text-lg py-3 hidden sm:block">
	&nbsp;
</div>