<script>
    // Get data from parent component
    export let items
    export let itemsSearched

    // Declare variable which gets used for the binding in the input field
    let searchTerm

    // Variable to show or hide reset button
    let resetVisible = false

    // Set up an empty array to fill it later with the results of the search
    const result = []

    // Whenever the value in the input field changes, the function search gets called
    $: searchTerm, search(searchTerm)
    
    // Items searched is the final result which gets passed to the parent comp
    // It is reactive now
    $: itemsSearched

    // Search function
    function search(searchTerm) {
        
        // Reset the array of results
        const result = []
        
        // Filter the item fields which get passed in from the parent comp by what is searched
        // And then push the found item in the new array
        items.filter((item) => {
            return (
                item.uid.toLowerCase().includes(searchTerm) ||
                item.data.title[0].text.toLowerCase().includes(searchTerm) ||
                item.data.sub_title[0].text.toLowerCase().includes(searchTerm) 
                )
            }).forEach((e) => {

            // Show reset button
            resetVisible = true

            // Hide reset button when nothing is searched
            if(searchTerm == '') {
                resetVisible = false
            }

            result.push(e)
        })

        
        // fill the final variable with the results
        itemsSearched = result
        
        // Calls the funcitons which closes all accordeons
        closeAllAccordeons() 
        
        // Return the final result
        return itemsSearched
    }

    // Closes all accordeons
    function closeAllAccordeons() {
		itemsSearched.map(item => {
			item.status = false
        })
	}

    // Reset will just set the searched items back to the original item list
    function reset() {
        itemsSearched = items
        searchTerm = ""

        // Calls the funcitons which closes all accordeons
        closeAllAccordeons() 
    } 
</script>

<div class="flex border-lines border-b w-full text-xl px-4 uppercase justify-between">
    <!-- Headline -->
    <div class="py-3">
        List
    </div>

    <div class="flex">
        <!-- Search field -->
        <input autocomplete="off" class="py-3 text-right pr-2" placeholder="Search" bind:value={searchTerm} />
    
        <!-- Reset button -->
        {#if resetVisible == true}
            <div on:click={reset} class="py-3 cursor-pointer">
                Reset
            </div>
        {/if}
    </div>
</div>

<style lang="postcss">
	input:focus {
        outline:none;
    }
</style>