<script>
	// Import function which helps to display the richtext which we receive from Prismic
    import PrismicDom from 'prismic-dom'

	// Get data from parent component or from Slice function
    export let slice
    export let inputParagraph
	export let inputTextAlignment // "ltr" or "rtl", left to right or right to left

	// Define variables which get used in this component
	let paragraph
	let textAlignment

	// Check if Slices function is used, otherwise use the data from parent component
	if (slice == undefined){
		paragraph = inputParagraph
		textAlignment = inputTextAlignment
	} else {
		paragraph = slice.primary.long_text
		textAlignment = slice.primary.textalignment
	}
</script>

{#if paragraph.length}
	<div class="py-4 sm:py-16 border-b border-lines">
		<div class="mx-auto px-4 sm:w-8/12 text-xl {textAlignment}">
			{@html PrismicDom.RichText.asHtml(paragraph)}
		</div>
	</div>
{/if}