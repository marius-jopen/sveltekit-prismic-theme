<script>
	import Slice from '$lib/prismic/slice.svelte'
  import { page } from "$app/stores"

	// Get the data from the parent component
	export let slices

  const props = {
    // image: $page.url.pathname.includes('home')
  }
</script>

{#if slices}
	<div class="allSlices">
		{#each slices as slice}
      <Slice {slice} {...props} />
		{/each}
	</div>
{/if}