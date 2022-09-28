<script>
  import { dev } from "$app/environment"

	// Get the data from the parent component
	export let slice

	// Connect each slice from Prismic to a component from above

	const mappings = {
    // Add your slice type mappings here
    // e.g.
    // carousel: ModuleCarousel
	}

  const missingSlice = (key) => !Object.keys(mappings).includes(key)
</script>

<div
  class="slice"
>
  <ToolComment comment={slice.slice_type} />

  <svelte:component
    this={mappings[slice.slice_type]}
    {slice}
  />
  {#if dev && missingSlice(slice.slice_type)}
    <pre>Missing module for {slice.slice_type}</pre>
  {/if}
</div>