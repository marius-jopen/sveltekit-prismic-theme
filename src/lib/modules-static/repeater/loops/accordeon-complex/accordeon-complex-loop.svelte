<script>
    // Import the function from Svelte which lets you run browser based functions
    import { browser } from '$app/env'

    // Import child components which are used in this module
    import ItemAccordeonList from '$lib/modules-static/repeater/loops/accordeon-complex/accordeon-complex-item.svelte'

    // Get data from parent component
    export let items
	export let type
    
    // Declare a varibale which gets changes when the active accordeon opens
    // It tells us the name of the accordeonm so we can close the others
    let activeItem
    let visibleItems = 2
    let loadMoreVisible = true

    // Everytime an accordeons opens, close all the others
    $: activeItem, closeInactiveAccordeons(activeItem)

    function loadMore() {
        visibleItems = 10000
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
        }
    }
</script>

{#each items as item, i}
    {#if i <= visibleItems}
        <ItemAccordeonList item={item} type={type} bind:interalStatus={item.status} bind:uid={activeItem}/>
    {/if}
{/each}

{#if loadMoreVisible}
    <div class="text-center text-xl py-3 uppercase cursor-pointer" on:click={loadMore}>
        Load More
    </div>
{/if}

<div class="border-lines border-b w-full -mt-1px">
</div>