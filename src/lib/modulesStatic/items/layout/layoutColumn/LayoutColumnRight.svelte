<script>
	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple.svelte'
	import ParagraphRichtextNarrow from "$lib/modulesFlex/paragraphs/ParagraphRichtextNarrow.svelte"

	export let input
</script>

<div>
	<HeadlineSimple inputHeadline={input.title[0].text} />
	<ParagraphRichtextNarrow inputParagraph={input.description} inputTextAlignment={"text-left"}/>
	<ParagraphRichtextNarrow inputParagraph={input.description} inputTextAlignment={"text-left"}/>
</div>