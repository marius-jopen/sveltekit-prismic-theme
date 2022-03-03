<script>
    // Import child components which are used in this module
    import OverlayItem from '$lib/modules-static/repeater/loops/overlay/overlay-item.svelte'

    // Get data from parent component
    export let items
</script>

<div class="">
    {#each items as item}
        <OverlayItem item={item} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>