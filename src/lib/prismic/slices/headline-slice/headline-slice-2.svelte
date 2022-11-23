<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let text
	export let style
	export let width = 'width-2xl'
	export let slice

	let styleColor = 'text-blue-200'

	if(slice) {
		text = slice.primary.title_headline
		style = slice.primary.style_headline
		width = slice.primary.width_headline ? slice.primary.width_headline : width
	}

	if (style == 'style-1') {
		styleColor = 'text-blue-200'
	} else if (style == 'style-2') {
		styleColor = 'text-amber-200'
	} else if (style == 'style-3') {
		styleColor = 'text-blue-200'
	}
</script>

<Container classes="{width} pt-4 pb-3" >
	<div class="text-center">
		{#if style}
		<div class="flex justify-center h2">
			<div class="circles {styleColor}">
				⬤
			</div>

			<Text plain field={text} classes="h2" />

			<div class="circles {styleColor}">
				⬤
			</div>
		</div>
		{:else}
			<Text field={text} />
		{/if}
	</div>
</Container>


<style lang="postcss">
	.circles {
		@apply px-2 mt-[-2px];
	}
</style>