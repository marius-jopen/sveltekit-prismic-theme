<script>
    import Item from '$lib/items/singleItems/itemHover.svelte'

    export let items
	export let type
</script>

<div class="flex flex-wrap">
    {#each items as item}
        <Item item={item} type={type} />
    {/each}
</div>