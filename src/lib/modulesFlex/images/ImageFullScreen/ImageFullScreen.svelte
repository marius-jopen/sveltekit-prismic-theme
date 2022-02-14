<script>
	// Get data from parent component or from Slice function
	export let slice
    export let inputImage

	// Define variables which get used in this component
	let image
	
	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		image = inputImage
	} else {
		image = slice.primary.image
	}
</script>

<img class="w-screen h-screen object-cover" src="{image.Big.url}" alt="{image.alt}">