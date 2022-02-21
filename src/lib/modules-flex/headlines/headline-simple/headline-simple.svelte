<script>
	// Import components which are used
	import Text from '$lib/modules-static/basics/text.svelte'
	
	// Get data from Slice function
	export let slice

	// Get data from parent component
    export let inputText // Input the string and not the array

	// Define variables which get used in this component
	let text

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		// Use data from the parent comp
		text = inputText
	} else {
		// Use data from the slices module
		text = slice.primary.text[0].text
	}
</script>

<div class="border-b border-lines bg-white">
	<!-- Display text basic comp -->
	<Text text={text} hasRichtext={false} classes={'px-4 py-3 text-xl uppercase text-center'} classesRichtext={''}/>
</div>