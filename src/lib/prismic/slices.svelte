<script>
	import Slice from '$lib/prismic/slice.svelte'
	export let slices
</script>

{#if slices}
	<div class="allSlices">
		{#each slices as slice}
      <Slice {slice} />
		{/each}
	</div>
{/if}