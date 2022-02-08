<script>
	import AccordeonComplexSearch from '$lib/modulesStatic/repeater/loops/accordeonComplex/AccordeonComplexSearch.svelte'
	import AccordeonComplexSort from '$lib/modulesStatic/repeater/loops/accordeonComplex/AccordeonComplexSort.svelte'
	import AccordeonComplexLoop from '$lib/modulesStatic/repeater/loops/accordeonComplex/AccordeonComplexLoop.svelte'

	// Get values from outside
    export let items
	export let type

	// Get values from the components with binding
	export let itemsSorted
	export let itemsSearched

	// Declate 2 variables which we need
	let itemsModified
	let itemsSortedModified

	// Set the variables to "all items" for the sorted comp and the loop
	// That we do not start empty or with an error
	itemsModified = items
	itemsSortedModified = items
	itemsSearched = items

	// make searched and sorted variables reative
	$: itemsSearched, setSearched() 
	$: itemsSorted, setSorted() 

	// Function which gets called on each keystroke of the search
	// It filters the list with the items and also the list which the sort function is using
	function setSearched() {
		if (itemsSearched.length > 0) {
			itemsModified = itemsSearched
			itemsSortedModified  = itemsSearched
		} 
	}

	// Function which sorts the loop
	function setSorted() {
		if (itemsSorted) {
			itemsModified = itemsSorted
		}
	}
</script>

<div>
	<AccordeonComplexSearch items={items} bind:itemsSearched={itemsSearched}/>
	<AccordeonComplexSort items={itemsSortedModified} bind:itemsSorted={itemsSorted}/>
	<AccordeonComplexLoop type={type} items={itemsModified} />
</div>

<!-- 
	TODO:
	URL connection
 -->