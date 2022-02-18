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
		imageSize = 'Big' // Define the size of the image (Default: Big)
		caption = slice.primary.caption
		hasRichtext = true // Define id the slices module caption is a richtext (Default: true)
	}
</script>

<div class="border-b border-lines relative">
	<!-- Display image basic comp -->
	<Image image={image} imageSize={imageSize} classes={'w-full h-screen object-cover'} />

	<!-- Display text basic comp -->
	<Text text={caption} hasRichtext={hasRichtext} classes={'px-4 py-2 absolute left-0 bottom-0'} classesRichtext={'px-4 pt-1 pb-3 absolute left-0 bottom-0'}/>
</div>