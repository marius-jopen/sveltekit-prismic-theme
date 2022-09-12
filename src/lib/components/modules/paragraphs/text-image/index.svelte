<script>
	// Import components which are used
	import Image from '$lib/components/atoms/image.svelte'
	import Text from '$lib/components/atoms/text.svelte'
	
	// Get data from Slice function
	export let slice

	// Get data from parent component
	export let inputImage // array of Prismic image with dimansions (Big, Medium, Small)
	export let inputImageSize // Image size (Big, Medium, Small or Original)
	export let inputCaption // string or array for Prismic richtext
	export let inputHasRichtext // define if the caption is a string or a Prismic richtext
	export let inputLongText // Get the longtext
	export let inputLayout
	export let inputHeight

	// Define variables which get used in this component
	let image
	let imageSize
	let caption
	let hasRichtext
	let longText
	let layout
	let height

	let textHeight = 0 // Variable to get the height of the text box

	// Make this variable reactive
	$: textHeight

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		// Use data from the parent comp
		image = inputImage
		imageSize = inputImageSize
		caption = inputCaption
		hasRichtext = inputHasRichtext
		longText = inputLongText
		layout = inputLayout
		height = inputHeight
	} else {
		// Use data from the slices module
		image = slice.primary.image
		imageSize = 'Big' // Define the size of the image (Default: Big)
		caption = slice.primary.caption
		hasRichtext = true // Define id the slices module caption is a richtext (Default: true)
		longText = slice.primary.long_text
		layout = slice.primary.layout
		height = slice.primary.height
	}
</script>

{#if height == true}
	<div class="border-b border-lines flex {(layout == true) ? 'flex-row' : 'flex-row-reverse' }">
		<div class="relative w-1/2 border-lines {(layout == true) ? 'border-r' : 'border-l' }">
			<Image image={image} imageSize={imageSize} classes={'w-full'} />
			<Text text={caption} hasRichtext={hasRichtext} classes={'px-4 py-2 absolute left-0 bottom-0'} classesRichtext={'px-4 pt-1 pb-3 absolute left-0 bottom-0'}/>
		</div>

		<div class="flex justify-center flex-col w-1/2">
			<div class="flex justify-center">
				<Text text={longText} hasRichtext={hasRichtext} classes={''} classesRichtext={'w-8/12'}/>
			</div>
		</div>
	</div>
{:else}
	<div class="border-b border-lines flex {(layout == true) ? 'flex-row' : 'flex-row-reverse' }">
		<div class="relative w-1/2 border-lines {(layout == true) ? 'border-r' : 'border-l' }">
			<Image image={image} imageSize={imageSize} style="height: {textHeight}px;" classes={'w-full object-cover'} />
			<Text text={caption} hasRichtext={hasRichtext} classes={'px-4 py-2 absolute left-0 bottom-0'} classesRichtext={'px-4 pt-1 pb-3 absolute left-0 bottom-0'}/>
		</div>

		<div class="w-1/2">
			<div bind:clientHeight={textHeight} class="pt-12 pb-14 flex justify-center">
				<Text text={longText} hasRichtext={hasRichtext} classes={''} classesRichtext={'w-8/12'}/>
			</div>
		</div>
	</div>
{/if}