<script>
    // Import the function from Svelte which lets you run browser based functions
    import { browser } from '$app/env'

    // Import child components which are used in this module
    import ItemAccordeonList from '$lib/modules-static/repeater/loops/accordeon-complex/accordeon-complex-item.svelte'

    // Get data from parent component
    export let items
	export let type
    export let urlUsed
    
    // Declare a varibale which gets changes when the active accordeon opens
    // It tells us the name of the accordeonm so we can close the others
    let activeItem
    let visibleItems = 2
    let loadMoreVisible = true
    let itemsTotal

    // Everytime an accordeons opens, close all the others
    $: activeItem, closeInactiveAccordeons(activeItem)

    // Load more button is reactive
    $: itemsTotal = items.length

    $: if(urlUsed == true) {
        loadMore()
    }

    // Function which sets the visible items to the total numebr of items
    // Also hides the laod more button
    function loadMore() {
        visibleItems = itemsTotal
        loadMoreVisible = false
    }

    // Close all Accordeons which are not active
    function closeInactiveAccordeons(activeItem) {
        if (activeItem) {
            items.map(item => {
                if(item.uid == activeItem) {
                    // Changes URL to active item
                    if(browser) {
                        location.hash = activeItem
                    }
                } else {
                    item.status = false
                }
            })
        } else {
            // Remove the hash content if an accordeon gets closed
            // if(browser) {
            //     location.hash = ''
            // }
        }
    }
</script>

<!-- Loop of items -->
{#each items as item, i}
    <!-- Limits the number of visible items -->
    {#if i <= visibleItems}
        <!-- The item -->
        <ItemAccordeonList item={item} type={type} bind:interalStatus={item.status} bind:uid={activeItem}/>
    {/if}
{/each}

<!-- Load more button -->
{#if loadMoreVisible && itemsTotal > visibleItems + 1}
    <div class="text-center text-xl py-3 uppercase cursor-pointer" on:click={loadMore}>
        Load {itemsTotal - visibleItems - 1} More
    </div>
{/if}

<div class="border-lines border-b w-full -mt-1px">
</div>