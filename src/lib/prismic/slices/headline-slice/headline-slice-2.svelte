<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let text
	export let style
	export let width = 'width-2xl'
	export let slice

	const styles = {
		'0': 'text-blue-200',
		'1': 'text-red-200',
		'2': 'text-amber-200',
		'3': 'text-blue-200 bg-background-3',
		'4': 'text-red-200 bg-background-3',
		'5': 'text-amber-200 bg-background-3'
	}

	if(slice) {
		text = slice.primary.title_headline
		style = slice.primary.style_headline
		width = slice.primary.width_headline ? slice.primary.width_headline : width
	}
</script>

<Container classesInnerInner="{width}" classesOuter="{styles[style]} pt-4 pb-3" >
	<div class="text-center">
		{#if style}
		<div class="flex justify-center h2">
			<div class="circles">
				⬤
			</div>

			<Text plain field={text} classes="h2 text-fonts-1" />

			<div class="circles">
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