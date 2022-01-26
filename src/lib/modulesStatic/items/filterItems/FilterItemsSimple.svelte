<script>
	export let items
	export let type

	let filterItemsRaw = []

	items.forEach(function (item) {
		item.tags.forEach(function (item) {
			filterItemsRaw.push(item);
		})
	})

	let filteredItems = filterItemsRaw.filter(function(elem, index, self) {
		return index === self.indexOf(elem);
	})

	filteredItems.sort()
</script>

<div class="overflow-scroll sm:overflow-auto width-full border-b border-lines bg-background sm:flex sm:justify-center">
	<div class="box sm:justify-center flex flex-row sm:w-full py-3 sm:px-4 mr-6 sm:mr-0">
		<a class="sm:text-center py-1 sm:py-0 ml-6 text-lg textHoverGrey" href="/{type}s" sveltekit:prefetch >
			All
		</a>

		{#each filteredItems as filterItem}
			<a class="sm:text-center py-1 sm:py-0 ml-6 text-lg textHoverGrey last:mr-6 sm:last:mr-0" href="/{type}s/category/{filterItem.replace(" ", '-').toLowerCase()}" sveltekit:prefetch >
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