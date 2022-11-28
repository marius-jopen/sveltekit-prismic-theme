<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let text
	export let style
	export let width = 'width-2xl'
	export let slice

	const styles = {
		'0': 'big',
		'1': 'small',
		'2': 'text-blue-200',
		'3': 'text-red-200',
		'4': 'text-amber-200',
		'5': 'text-blue-200 bg-background-3',
		'6': 'text-red-200 bg-background-3',
		'7': 'text-amber-200 bg-background-3'
	}

	if(slice) {
		text = slice.primary.title_headline
		style = slice.primary.style_headline
		width = slice.primary.width_headline ? slice.primary.width_headline : width
	}
</script>

<Container classesInnerInner="{width}" classesOuter="{styles[style]} pt-4 pb-3" >
	<div class="text-center">
		<div class="flex justify-center {styles[style] == 'big' ? 'h1' : 'h2'}">
			{#if styles[style] == 'big' || styles[style] == 'small'}
				<div />
			{:else}
				<div class="circles">
					⬤
				</div>
			{/if}

			<Text plain field={text} classes="text-fonts-1" />

			{#if styles[style] == 'big' || styles[style] == 'small'}
				<div />
			{:else}
				<div class="circles">
					⬤
				</div>
			{/if}
		</div>
	</div>
</Container>


<style lang="postcss">
	.circles {
		@apply px-2 mt-[-2px];
	}
</style>