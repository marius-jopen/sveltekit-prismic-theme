<script>
    import TypoGridItem from '$lib/modulesStatic/repeater/loops/typoGrid/TypoGridItem.svelte'

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