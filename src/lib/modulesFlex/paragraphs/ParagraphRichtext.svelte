<script>
    import PrismicDom from 'prismic-dom'

    export let slice
    export let inputParagraph
	export let inputTextAlignment

	let paragraph
	let textAlignment

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