<script>
    import Item from '$lib/modulesStatic/items/singleItems/ItemHover.svelte'

    export let items
	export let type
</script>

<div class="flex flex-wrap">
    {#each items as item}
        <Item item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>