<script>
	import Slice from '$lib/prismic/slice.svelte'
  import { page } from "$app/stores"

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