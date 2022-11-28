<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte";

	export let text
	export let centered = ''
	export let width = 'width-full'
	export let slice
	export let style = 0

	const styles = {
		'0': 'from-amber-200 to-blue-200',
		'1': 'from-blue-200 to-amber-200',
		'2': 'from-red-200 to-blue-200'
	}

	if(slice) {
		text = slice.primary.text_text
		centered = slice.primary.centered_text
		style = slice.primary.style_text
		width = slice.primary.width_text ? slice.primary.width_text : width
	}
</script>

<div class="w-full h-2 bg-gradient-to-r {styles[style]}" />

<Container classesOuter="pt-4 pb-6 px-4" classesInner="{width}" >
	<Text field={text} classes="{centered ? 'text-center' : ''}" />
</Container>

<div class="w-full h-2 bg-gradient-to-r {styles[style]}" />