<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import LayoutAccordeon2 from "$lib/tools/accordeon/accordeon-2.svelte"

	export let title
	export let text_1
	export let text_2
	export let style
	export let width = 'width-full'
	export let slice

	let styleColor = 'from-blue-200 to-red-200'

	if(slice) {
		title = slice.primary.title_text_feature
		text_1 = slice.primary.text_1_text_feature
		text_2 = slice.primary.text_2_text_feature
		style = slice.primary.style_text_feature
		width = slice.primary.width_text_feature ? slice.primary.width_text_feature : width
	}

	if (style == 'style-1') {
		styleColor = 'from-amber-200 to-blue-200'
	} else if (style == 'style-2') {
		styleColor = 'from-red-200 to-blue-200'
	} else if (style == 'style-3') {
		styleColor = 'from-blue-200 to-amber-200'
	}
</script>

<Container saosOff classes="{width} pt-4 pb-8 pr-8 text-feature-slice-1" >
	<LayoutAccordeon2 color="bg-gradient-to-b {styleColor}" inputHeadline={title} >
		<div class="pt-4 pb-4 px-4">
			<Text field={text_1} classes="pb-4" />
			<Text field={text_2} classes="p2" />
		</div>
	</LayoutAccordeon2>
</Container>


<style lang="postcss">
	:global(.text-feature-slice-1 .block-img) {
		@apply py-3;
	}

	:global(.text-feature-slice-1 .block-img img) {
		@apply rounded-2xl;
	}
</style>