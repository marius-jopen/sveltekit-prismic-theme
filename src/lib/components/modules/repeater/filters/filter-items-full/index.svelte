<script>
	// Import fade function from Svelte
	import { fade } from "svelte/transition"

	// Get data from parent component
	export let items
	export let type

	// Define variables which are used for the filter
	let filterItemsRaw = []
	let filterState = false

	// Get all possible tags from the items at put them into an array
	items.forEach(function (item) {
		item.tags.forEach(function (item) {
			filterItemsRaw.push(item);
		})
	})

	// Remove all double items from that array
	let filteredItems = filterItemsRaw.filter(function(elem, index, self) {
		return index === self.indexOf(elem);
	})

	// Sort the items by Alphabet
	filteredItems.sort()

	// Open or close the area with the filter names
    function filter() {
        if(filterState == false)
			filterState = true
        else {
			filterState = false
        }
    }

	function close() {
        filterState = false
    }
</script>

<!-- Button -->
<div on:click={filter} class="z-50 fixed cursor-pointer textHoverGrey">
	Filter
</div>

<!-- Open and Close area -->
{#if filterState == true}
	<div transition:fade>
		<div class="box z-0 w-full bg-background left-0 top-0 fixed flex flex-col justify-center ">
			<div class="text-center py-3 px-4 flex flex-col">
				<!-- All items -->
				<a on:click={e => close()} class="text-center py-1 sm:py-0 ml-6 text-lg textHoverGrey" href="/{type}s" data-sveltekit-prefetch >
					All
				</a>

				<!-- List of filtered items -->
				{#each filteredItems as filterItem}
					<a on:click={e => close()} class="text-center py-1 sm:py-0 ml-6 text-lg textHoverGrey" href="/{type}s/category/{filterItem.replace(" ", '-').toLowerCase()}" data-sveltekit-prefetch >
						{filterItem}
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}

<!-- Push the open and close area down to not cover the navigation -->
<style lang="postcss">
	.box {
		top: 53px;
		height: calc(100vh - 53px);
	}
</style>