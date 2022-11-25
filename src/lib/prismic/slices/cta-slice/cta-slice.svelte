<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Link from "$lib/prismic/atoms/link.svelte"

	export let text = ''
	export let linkText = ''
	export let linkSrc = ''
	export let width = 'width-2xl'
	export let slice
	export let flip = false

	if(slice) {
		flip = slice.primary.flip_cta
		text = slice.primary.text_cta
		linkText = slice.primary.link_text_cta
		linkSrc = slice.primary.link_src_cta
		width = slice.primary.width_cta ? slice.primary.width_cta : width
	}
</script>

<Container classesInner="{width} pt-4 pb-8 px-4" >
	<div class="flex gap-4 {flip ? 'flex-row' : 'flex-row-reverse'}">
		<Text field={text} classes="w-1/2" />

		<div class="flex flex-col justify-center w-1/2">
			<div class="flex flex-row justify-center">
				<Link document={linkSrc} activeClass='' classes="button-1" >
					<Text inline field={linkText} />
				</Link>
			</div>
		</div>
	</div>
</Container>