<script>
	// Import components which are used
	import Image from '$lib/modules-static/basics/image.svelte'
	import Text from '$lib/modules-static/basics/text.svelte'
	
	// Get data from Slice function
	export let slice

	// Get data from parent component
	export let inputImage // array of Prismic image with dimansions (Big, Medium, Small)
	export let inputImageSize // Image size (Big, Medium, Small or Original)
	export let inputCaption // string or array for Prismic richtext
	export let inputHasRichtext // define if the caption is a string or a Prismic richtext

	// Define variables which get used in this component
	let image
	let imageSize
	let caption
	let hasRichtext

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		// Use data from the parent comp
		image = inputImage
		imageSize = inputImageSize
		caption = inputCaption
		hasRichtext = inputHasRichtext
	} else {
		// Use data from the slices module
		image = slice.primary.image
		caption = slice.primary.caption
		hasRichtext = true // Define id the slices module caption is a richtext (Default: true)
		size = 'Big' // Define the size of the image (Default: Big)
	}
</script>

<div class="border-b border-lines">
	<!-- Display image basic comp -->
	<Image image={image} imageSize={imageSize} classes={'border-b border-lines w-full'} />

	<!-- Display text basic comp -->
	<Text text={caption} hasRichtext={hasRichtext} classes={'px-4 py-2'} classesRichtext={'px-4 pt-1 pb-3'}/>
</div>