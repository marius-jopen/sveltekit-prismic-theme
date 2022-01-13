<script>
    import Item from '$lib/items/item.svelte'
    export let items
</script>

<div class="flex flex-wrap">
    {#each items as item}
        <Item item={item} />
    {/each}
</div>