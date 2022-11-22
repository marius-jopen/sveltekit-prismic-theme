<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import LayoutAccordeon2 from "$lib/tools/accordeon-2.svelte"

	export let title
	export let text_1
	export let text_2
	export let width = 'width-2xl'
	export let slice

	if(slice) {
		title = slice.primary.title_text_feature
		text_1 = slice.primary.text_1_text_feature
		text_2 = slice.primary.text_2_text_feature
		width = slice.primary.width_text_feature ? slice.primary.width_text_feature : width
	}
</script>

<Container classes="{width} pt-4 pb-8 px-4" >
	<LayoutAccordeon2 inputHeadline={title} >
		<Text field={text_1} />
		<Text field={text_2} />
	</LayoutAccordeon2>
</Container>