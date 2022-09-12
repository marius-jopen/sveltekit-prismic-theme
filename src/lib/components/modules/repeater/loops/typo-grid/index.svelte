<script>
    // Import child components which are used in this module
    import TypoGridItem from '$lib/modules-static/repeater/loops/typo-grid/typo-grid-item.svelte'

    // Get data from parent component
    export let items
	export let type
</script>

<div class="flex flex-wrap divide-x divide-lines">
    {#each items as item}
        <TypoGridItem item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>