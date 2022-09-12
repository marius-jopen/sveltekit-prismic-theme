<script>
    // Import child components which are used in this module
    import BigImageListItem from '$lib/modules-static/repeater/loops/big-image-list/big-image-list-item.svelte'

    // Get data from parent component
    export let items
	export let type
</script>

<div class="flex flex-wrap">
    {#each items as item}
        <BigImageListItem item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full">
	</div>
</div>