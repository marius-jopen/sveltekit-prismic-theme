<script>
	// Import child components which are used in this module
	import AccordeonComplexUrl from '$lib/modulesStatic/repeater/loops/AccordeonComplex/AccordeonComplexUrl.svelte'
	import AccordeonComplexSearch from '$lib/modulesStatic/repeater/loops/AccordeonComplex/AccordeonComplexSearch.svelte'
	import AccordeonComplexSort from '$lib/modulesStatic/repeater/loops/AccordeonComplex/AccordeonComplexSort.svelte'
	import AccordeonComplexLoop from '$lib/modulesStatic/repeater/loops/AccordeonComplex/AccordeonComplexLoop.svelte'

	// Get data from parent component
    export let items
	export let type

	// Get values from the components with binding
	let itemsSorted
	let itemsSearched
	let itemsUrl

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
	$: itemsUrl, setUrl()

	// Function which gets called on each keystroke of the search
	// It filters the list with the items and also the list which the sort function is using
	function setSearched() {
		if (itemsSearched.length > 0) {
			itemsModified = itemsSearched
			itemsSortedModified  = itemsSearched
		} 
	}

	// Function updates the loop with the sorted items
	function setSorted() {
		if (itemsSorted) {
			itemsModified = itemsSorted
		}
	}

	// Function which updates the loop with the active Url item
	function setUrl() {
		if (itemsUrl) {
			itemsModified = itemsUrl
		}
	}
</script>

<div>
	<!-- Insert all used components -->
	<AccordeonComplexUrl items={items} bind:itemsUrl={itemsUrl} />
	<AccordeonComplexSearch items={items} bind:itemsSearched={itemsSearched}/>
	<AccordeonComplexSort items={itemsSortedModified} bind:itemsSorted={itemsSorted}/>
	<AccordeonComplexLoop type={type} items={itemsModified} />
</div>