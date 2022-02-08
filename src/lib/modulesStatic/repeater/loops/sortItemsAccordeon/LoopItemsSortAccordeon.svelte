<script>
    import ItemAccordeonList from '$lib/modulesStatic/repeater/singleItems/ItemAccordeonList.svelte'
	import SortItems from '$lib/modulesStatic/repeater/loops/sortItemsAccordeon/SortItems.svelte'

    export let items
	export let type
	
	let activeItem
	
	// Make items reative
	$: items

	// Everytime an accordeons opens, close all the others
	$: activeItem, closeInactiveAccordeons(activeItem)

	// Close all Accordeons which are not active
	function closeInactiveAccordeons(activeItem) {
		if (activeItem) {
			items.map(item => {
				if(item.uid == activeItem) {
				} else {
					item.status = false
				}
			})
		}
	}
</script>

<div>
	<SortItems items={items} bind:itemSorted={items}/>

    {#each items as item}
        <ItemAccordeonList item={item} type={type} status={item.status} bind:interalStatus={item.status} bind:uid={activeItem}/>
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>