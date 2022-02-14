<script>
	// Import Modules which are used to display the content
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'
	import ParagraphRichtextBig from "$lib/modules-flex/paragraphs/paragraph-richtext-big/paragraph-richtext-big.svelte"

	// Get data from parent component
	export let input
</script>

<div>
	<HeadlineSimple inputHeadline={input.title[0].text} />
	<ParagraphRichtextBig inputParagraph={input.description} inputTextAlignment={"text-left"}/>
	<ParagraphRichtextBig inputParagraph={input.description} inputTextAlignment={"text-left"}/>
</div>