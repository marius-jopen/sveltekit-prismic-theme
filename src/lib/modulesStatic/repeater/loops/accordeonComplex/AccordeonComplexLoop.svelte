<script>
    import ItemAccordeonList from '$lib/modulesStatic/repeater/loops/accordeonComplex/AccordeonComplexItem.svelte'

    export let items
	export let type
    
    // Declare a varibale which gets changes when the active accordeon opens
    // It tells us the name of the accordeonm so we can close the others
    let activeItem

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

{#each items as item}
    <ItemAccordeonList item={item} type={type} bind:interalStatus={item.status} bind:uid={activeItem}/>
{/each}

<div class="border-lines border-b w-full -mt-1px">
</div>