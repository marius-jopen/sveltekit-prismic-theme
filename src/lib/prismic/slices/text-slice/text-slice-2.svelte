<script>
	import TextGlossary from "$lib/prismic/modules/text-glossary/text-glossary.svelte";

	export let text
	export let centered = ''
	export let width = 'width-full'
	export let style = 0
	export let slice

	const styles = {
		'0': 'bg-background-2',
		'1': 'bg-background-3'
	}

	if(slice) {
		text = slice.primary.text_text
		centered = slice.primary.centered_text
		style = slice.primary.style_text
		width = slice.primary.width_text ? slice.primary.width_text : width
	}
</script>

<TextGlossary {text} {centered} {width} classes={styles[style] + "  pb-6 px-8"} color='bg-red-200' />