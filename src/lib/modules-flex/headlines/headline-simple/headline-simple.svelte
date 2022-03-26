<script>
	// Import components which are used
	import Text from '$lib/modules-basic/text.svelte'
	
	// Get data from Slice function
	export let slice

	// Get data from parent component
    export let inputText // Input the string and not the array
	export let inputClasses

	// Define variables which get used in this component
	let text
	let classes

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		// Use data from the parent comp
		text = inputText
		classes = inputClasses
	} else {
		// Use data from the slices module
		text = slice.primary.text[0].text
		classes = ""
	}
</script>

<div class="border-b border-lines {classes}">
	<!-- Display text basic comp -->
	<Text text={text} hasRichtext={false} classes={'px-4 py-3 text-xl uppercase text-center'} classesRichtext={''}/>
</div>