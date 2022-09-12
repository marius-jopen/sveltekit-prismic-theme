<script>
	// Import components which are used
	import PrismicDom from 'prismic-dom'

	// Get data from Slice function
	export let slice

	// Get data from parent component
    export let inputTable

	// Define variables which get used in this component
	let longText

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		// Use data from the parent comp
		longText = inputTable
	} else {
		// Use data from the slices module
		longText = slice.primary.table_basic
	}
</script>

<div class="table-basic">
	{@html longText}
</div>

<style lang="postcss">
	/* Full Table */
	:global(.table-basic table) {
		@apply w-full;
	}

	/* Each row */
	:global(.table-basic tr) {
		@apply text-left border-b border-lines;
	}

	/* Headline cells */
	:global(.table-basic th) {
		@apply bg-neutral-200 font-normal py-2 px-4;
	}

	/* All other cells */
	:global(.table-basic td) {
		@apply py-2 px-4;
	}
</style>