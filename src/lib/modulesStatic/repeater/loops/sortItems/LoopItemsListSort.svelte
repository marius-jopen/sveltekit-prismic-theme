<script>
    import ItemAccordeonList from '$lib/modulesStatic/repeater/singleItems/ItemAccordeonList.svelte'

    export let items
	export let type

	let sortItems = [
		{
			"sort": "uid",
			"label": "Title",
			"status": "false",
			"css": "w-1/3"
		},
		{
			"sort": "data.sub_title.0.text",
			"label": "Sub Title",
			"status": "false",
			"css": "w-1/3"
		},
		{
			"sort": "last_publication_date",
			"label": "Date",
			"status": "false",
			"css": "w-1/3"
		}
	]

	function sort(index, sort, label, status, css) {
		if(status == 'false') {
			sortItems[index] = {sort: sort, label: label, status: 'true', css: css }
		} else {
			sortItems[index] = {sort: sort, label: label, status: 'false', css: css }
		}

		items = sortMe(sort, items, status)
	}

	var sortMe = function (prop, arr, direction) {
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

<div>
	<div class="flex border-lines border-b w-full text-xl py-3 px-4 uppercase">
		{#each sortItems as sortItem, index}
			<div class="cursor-pointer flex {sortItem.css}" on:click={e => sort(index, sortItem.sort, sortItem.label, sortItem.status, sortItem.css)}>
				<div>
					{sortItem.label}
				</div>

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

    {#each items as item}
        <ItemAccordeonList item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>