<script>
    // Import child components which are used in this module
    import ThumbnailGridHoverItem from '$lib/modules-static/repeater/loops/thumbnail-grid-hover/thumbnail-grid-hover-item.svelte'

    // Get data from parent component
    export let items
	export let type
</script>

<div class="flex flex-wrap border-lines border-b">
    {#each items as item}
        <ThumbnailGridHoverItem item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>