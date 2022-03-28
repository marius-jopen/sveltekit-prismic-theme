<script>
    // Import child components which are used in this module
    import ThumbnailGridVideosHoverItem from '$lib/modules-static/repeater/loops/thumbnail-grid-videos-hover/thumbnail-grid-videos-hover-item.svelte'

    // Get data from parent component
    export let items
	export let type
</script>

<div class="flex flex-wrap divide-x divide-lines">
    {#each items as item}
        <ThumbnailGridVideosHoverItem item={item} type={type} />
    {/each}
</div>