<script>
    import ItemAccordeonList from '$lib/modulesStatic/repeater/singleItems/ItemAccordeonList.svelte'
	import SortListItem from '$lib/modulesStatic/repeater/loops/sortItems/SortListItem.svelte'

    export let items
	export let type

	// For each Sort Item a variable needs to be created
	let sortUid = false
	let sortSubtitle = false

	function sort(sortBy) {
		let direction = ""

		// For each created variable above, this IF condition needs to be created
		if (sortUid == true) {
			sortUid = false
			direction = "-"
		} else {
			sortUid = true
			direction = ""
		}

		if (sortSubtitle == true) {
			sortSubtitle = false
			direction = "-"
		} else {
			sortSubtitle = true
			direction = ""
		}

		items = items.sort(dynamicSort(direction + sortBy))
	}

	function dynamicSort(property) {
		var sortOrder = 1

		if(property[0] === "-") {
			sortOrder = -1
			property = property.substr(1);
		}

		return function (a,b) {
			if(sortOrder == -1) {
				return b[property].localeCompare(a[property])
			} else{
				return a[property].localeCompare(b[property])
			}
		}
	}
</script>

<div>
	<div class="flex border-lines border-b w-full text-xl py-3 px-4 uppercase">
		<!-- For each sort item this block needs to be created -->
		<div on:click={e => sort("uid")} class="w-1/2">
			<SortListItem label={"Title"} />
		</div>

		<div on:click={e => sort("data.sub_title[0].text")} class="w-1/2">
			<SortListItem label={"Sub Title"} />
		</div>
	</div>

    {#each items as item}
        <ItemAccordeonList item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>