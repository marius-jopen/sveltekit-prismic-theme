<script>
  import { page } from "$app/stores"

	// Get the data from the parent component
	export let slices

  const props = {
    maxWidth: $page.url.pathname.includes('about')
  }
</script>

{#if slices}
	<div class="allSlices">
		{#each slices as slice}
      <RootSlice {slice} {...props} />
		{/each}
	</div>
{/if}
