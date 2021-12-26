<script>
	export let projects

	let filterItemsRaw = []

	projects.forEach(function (project) {
		project.tags.forEach(function (item) {
			filterItemsRaw.push(item);
		})
	})

	let filteredProjects = filterItemsRaw.filter(function(elem, index, self) {
		return index === self.indexOf(elem);
	})
</script>

<div class="justify-center flex flex-col sm:flex-row w-full py-3 px-4 border-b border-lines">
    {#each filteredProjects as filterItem}
        <a class="text-center py-1 sm:py-0 ml-4 text-lg textHoverGrey" href="/projects/category/{filterItem.replace(" ", '-').toLowerCase()}" sveltekit:prefetch >
            {filterItem}
        </a>
    {/each}
</div>