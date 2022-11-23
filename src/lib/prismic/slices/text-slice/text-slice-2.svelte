<script>
	import TextGlossary from "$lib/prismic/modules/text-glossary/text-glossary.svelte";

	export let text
	export let centered = ''
	export let width = 'width-full'
	export let slice

	if(slice) {
		text = slice.primary.text_text
		centered = slice.primary.centered_text
		width = slice.primary.width_text ? slice.primary.width_text : width
	}
</script>

<TextGlossary {text} {centered} {width} classes={"px-4"} />