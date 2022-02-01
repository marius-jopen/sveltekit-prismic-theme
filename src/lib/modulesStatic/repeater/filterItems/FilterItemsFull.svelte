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
		<div class="box z-0 w-full bg-background left-0 top-0 fixed flex flex-col justify-center ">
			<div class="text-center py-3 px-4 flex flex-col">
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
	</div>
{/if}

<style lang="postcss">
	.box {
		top: 53px;
		height: calc(100vh - 53px);
	}
</style>