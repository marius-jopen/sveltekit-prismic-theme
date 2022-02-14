<script>
    // Import child components which are used in this module
    import ItemHover from '$lib/modules-static/repeater/loops/thumbnail-grid/thumbnail-grid-item.svelte'

    // Get data from parent component
    export let items
	export let type
</script>

<div class="flex flex-wrap">
    {#each items as item}
        <ItemHover item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>