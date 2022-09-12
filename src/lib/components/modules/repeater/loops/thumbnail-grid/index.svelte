<script>
  // Import child components which are used in this module
  import Item from '$lib/components/modules/repeater/loops/thumbnail-grid/item.svelte'

  // Get data from parent component
  export let items
	export let type
</script>

<div class="flex flex-wrap">
    {#each items as item}
        <Item {item} {type} />
    {/each}

	<div class="border-lines border-b w-full -mt-1px" />
</div>