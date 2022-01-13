<script>
	export let items

	let filterItemsRaw = []

	items.forEach(function (item) {
		item.tags.forEach(function (item) {
			filterItemsRaw.push(item);
		})
	})

	let filteredItems = filterItemsRaw.filter(function(elem, index, self) {
		return index === self.indexOf(elem);
	})
</script>

<div class="justify-center flex flex-col sm:flex-row w-full py-3 px-4 border-b border-lines">
    {#each filteredItems as filterItem}
        <a class="text-center py-1 sm:py-0 ml-4 text-lg textHoverGrey" href="/projects/category/{filterItem.replace(" ", '-').toLowerCase()}" sveltekit:prefetch >
            {filterItem}
        </a>
    {/each}
</div>