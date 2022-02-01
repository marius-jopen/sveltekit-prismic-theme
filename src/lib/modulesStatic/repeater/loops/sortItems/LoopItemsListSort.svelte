<script>
    import ItemAccordeonList from '$lib/modulesStatic/repeater/singleItems/ItemAccordeonList.svelte'
	import SortList from '$lib/modulesStatic/repeater/loops/sortItems/SortList.svelte'

    export let items
	export let type
</script>

<div class="">
	<SortList items={items} type={type} />

    {#each items as item}
        <ItemAccordeonList item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>