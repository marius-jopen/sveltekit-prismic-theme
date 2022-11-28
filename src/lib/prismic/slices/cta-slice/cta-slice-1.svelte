<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Link from "$lib/prismic/atoms/link.svelte"

	export let text = ''
	export let linkText = ''
	export let linkSrc = ''
	export let width = 'width-full'
	export let slice
	export let flip = false
	export let style = 0

	const styles = {
		'0': 'from-red-200 to-blue-200',
		'1': 'from-amber-200 to-red-200'
	}

	if(slice) {
		flip = slice.primary.flip_cta
		text = slice.primary.text_cta
		linkText = slice.primary.link_text_cta
		linkSrc = slice.primary.link_src_cta
		style = slice.primary.style_cta
		width = slice.primary.width_cta ? slice.primary.width_cta : width
	}
</script>

<Container classesInner="{width} pt-4 pb-4 px-4" classesOuter={styles[style] + " bg-gradient-to-r"}>
	<div class="flex gap-4 {flip ? 'flex-row' : 'flex-row-reverse'}">
		<Text field={text} classes="w-1/2" />

		<div class="flex flex-col justify-center w-1/2">
			<div class="flex flex-row justify-center px-8">
				<Link document={linkSrc} activeClass='' classes="h2 w-full flex justify-between bg-white shadow-lg rounded-full px-8 py-4" >
					<Text inline field={linkText} />
					<div>
						>
					</div>
				</Link>
			</div>
		</div>
	</div>
</Container>