<script>
	// Get data from parent component
	export let items
	export let type = 'project'

	// Define variables which are used for the filter
	let filterItemsRaw = []

  console.log(items)

	// Get all possible tags from the items at put them into an array
	items.forEach(function (item) {
		item.selected.tags.forEach(function (item) {
			filterItemsRaw.push(item);
		})
	})

	// Remove all double items from taht array
	let filteredItems = filterItemsRaw.filter(function(elem, index, self) {
		return index === self.indexOf(elem);
	})

	// Sort the items by Alphabet
	filteredItems.sort()
</script>

<div class="overflow-scroll sm:overflow-auto width-full border-b border-lines bg-background sm:flex sm:justify-center">
	<div class="box sm:justify-center flex flex-row sm:w-full py-3 sm:px-4 mr-6 sm:mr-0">
		<!-- All items -->
		<a class="sm:text-center py-1 sm:py-0 ml-6 text-lg textHoverGrey" href="/{type}s" data-sveltekit-prefetch >
			All
		</a>

		<!-- List of filtered items -->
		{#each filteredItems as filterItem}
			<a class="sm:text-center py-1 sm:py-0 ml-6 text-lg textHoverGrey last:mr-6 sm:last:mr-0" href="/{type}s/category/{filterItem.replace(" ", '-').toLowerCase()}" data-sveltekit-prefetch >
				{filterItem}
			</a>
		{/each}
	</div>
</div>


<style lang="postcss">
	@media screen and (max-width: 640px) {
		.box {
			display: -webkit-box;
    		width: max-content;
		}
	}
</style>