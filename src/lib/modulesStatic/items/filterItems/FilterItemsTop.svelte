<script>
	import { fade } from "svelte/transition"

	export let items
	export let type

	let filterItemsRaw = []
	let filterState = false

	items.forEach(function (item) {
		item.tags.forEach(function (item) {
			filterItemsRaw.push(item);
		})
	})

	let filteredItems = filterItemsRaw.filter(function(elem, index, self) {
		return index === self.indexOf(elem);
	})

	filteredItems.sort()

    function filter() {
        if(filterState == false)
			filterState = true
        else {
			filterState = false
        }
    }
</script>

<div on:click={filter} class="z-50 fixed cursor-pointer textHoverGrey">
	Filter
</div>

{#if filterState == true}
	<div transition:fade>
		<div class="fixed left-0 top-0 z-40 justify-center flex flex-col sm:flex-row w-full py-3 px-4 bg-background">
			<a class="text-center py-1 sm:py-0 ml-6 text-lg textHoverGrey" href="/{type}s" sveltekit:prefetch >
				All
			</a>

			{#each filteredItems as filterItem}
				<a class="text-center py-1 sm:py-0 ml-6 text-lg textHoverGrey" href="/{type}s/category/{filterItem.replace(" ", '-').toLowerCase()}" sveltekit:prefetch >
					{filterItem}
				</a>
			{/each}
		</div>
	</div>
{/if}