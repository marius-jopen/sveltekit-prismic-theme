<script>
    import ItemAccordeonList from '$lib/modulesStatic/items/singleItems/ItemAccordeonList.svelte'

    export let items
	export let type

</script>

<div class="">
	<div class="flex border-lines border-b w-full text-xl py-3 px-4 uppercase">
		<div class="w-1/2 flex">
			<div>
				Title
			</div>

			<div class="pl-2">
				Up
			</div>
		</div>

		<div class="w-1/2 flex">
			<div>
				Sub Title
			</div>

			<div class="pl-2">
				Up
			</div>
		</div>
	</div>

    {#each items as item}
        <ItemAccordeonList item={item} type={type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px">
	</div>
</div>