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
	<div class="pt-1 pb-5 border-b border-lines">
		<div class="px-4 {textAlignment}">
			{@html PrismicDom.RichText.asHtml(paragraph)}
		</div>
	</div>
{/if}