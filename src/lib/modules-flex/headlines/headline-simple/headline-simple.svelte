<script>
	// Get data from parent component or from Slice function
	export let slice
    export let inputHeadline

	// Define variables which get used in this component
	let headline

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		headline = inputHeadline
	} else {
		headline = slice.primary.headline
	}
</script>

<div class="text-xl py-3 border-b border-lines text-center bg-background">
    {headline[0].text}
</div>