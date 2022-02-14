<script>
	// Import Modules which are used to display the content
	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple/HeadlineSimple.svelte'
	import ParagraphRichtextBig from "$lib/modulesFlex/paragraphs/ParagraphRichtextBig/ParagraphRichtextBig.svelte"

	// Get data from parent component
	export let input
</script>

<div>
	<HeadlineSimple inputHeadline={input.title[0].text} />
	<ParagraphRichtextBig inputParagraph={input.description} inputTextAlignment={"text-left"}/>
	<ParagraphRichtextBig inputParagraph={input.description} inputTextAlignment={"text-left"}/>
</div>