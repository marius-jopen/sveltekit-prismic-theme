<script>
	import Link from "$lib/prismic/atoms/link.svelte"
	import { kebabCase } from '$lib/tools/strings'

	export let items
	export let type

	let itemClasses = 'bg-neutral-100 hover:bg-neutral-200 transition-colors px-6 py-0.5 rounded-xl'

	// Define variables which are used for the filter
	let filterItemsRaw = []

	// Get all possible tags from the items at put them into an array
	items.forEach(function (item) {
		item.item.tags.forEach(function (item) {
			filterItemsRaw.push(item);
		})
	})

	// Remove all double items from that array
	let filteredItems = filterItemsRaw.filter(function(elem, index, self) {
		return index === self.indexOf(elem);
	})

	// Sort the items by Alphabet
	filteredItems.sort()
</script>

<div class="flex gap-2 pb-6 justify-center">
	<Link href="/{type}" classes="{itemClasses}">
		All
	</Link>

	{#each filteredItems as filterItem}
		<Link classes="{itemClasses}" href="/{type}/category/{kebabCase(filterItem.toLowerCase())}">
			{filterItem}
		</Link>
	{/each}
</div>