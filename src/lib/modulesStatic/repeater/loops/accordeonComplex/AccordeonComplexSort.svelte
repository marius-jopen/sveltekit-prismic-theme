<script>
	// Get data from parent component
    export let items
    export let itemsSorted

	// Array of the Sort fields on which the user can click on+
	// More can be added if needed
	let sortItems = [
		{
			"sort": "uid",
			"label": "Title",
			"status": "false",
			"css": "w-1/2 lg:w-1/3 textHoverGrey"
		},
		{
			"sort": "data.sub_title.0.text",
			"label": "Sub Title",
			"status": "false",
			"css": "w-1/2 lg:w-1/3 textHoverGrey"
		},
		{
			"sort": "last_publication_date",
			"label": "Date",
			"status": "false",
			"css": "hidden lg:flex w-1/3 textHoverGrey"
		}
	]

	// The main function which gets called on click on sort button
	function sort(index, sort, label, status, css) {
		closeAllAccordeons() 
		addSortStatus(index, sort, label, status, css)
		itemsSorted = sortMe(sort, items, status)
	}

    // Function to add AccordeonStatus to the items array
	function closeAllAccordeons() {
		items.map(item => {
			item.status = false
        })
	}

    // Function to add SortStatus to the Sort Array
	function addSortStatus(index, sort, label, status, css) {
		if(status == 'false') {
			sortItems[index] = {sort: sort, label: label, status: 'true', css: css }
		} else {
			sortItems[index] = {sort: sort, label: label, status: 'false', css: css }
		}
	}

    // Sort function
	function sortMe(prop, arr, direction) {
		prop = prop.split('.')
		var len = prop.length

		arr.sort(function (a, b) {
			var i = 0

			while( i < len ) {
				a = a[prop[i]]
				b = b[prop[i]]
				i++
			}

			if (direction == 'true') {
				if (a < b) {
					return -1
				} else if (a > b) {
					return 1
				} else {
					return 0
				}
			} else {
				if (a > b) {
					return -1
				} else if (a < b) {
					return 1
				} else {
					return 0
				}
			}

		})

		return arr
	}
</script>

<div class="flex border-lines border-b w-full text-xl py-3 px-4 uppercase">
    {#each sortItems as sortItem, index}
        <div class="cursor-pointer flex {sortItem.css}" on:click={e => sort(index, sortItem.sort, sortItem.label, sortItem.status, sortItem.css)}>
            <!-- Name of Sorted field -->
			<div>
                {sortItem.label}
            </div>

			<!-- Indicator if the items are sorted up or down -->
            <div class="pl-3">
                {#if sortItem.status == 'false'}
                    Down
                {:else}
                    Up
                {/if}
            </div>
        </div>
    {/each}
</div>