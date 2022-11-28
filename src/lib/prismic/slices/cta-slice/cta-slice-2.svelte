<script>
	import Container from "$lib/tools/container.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	import Link from "$lib/prismic/atoms/link.svelte"

	export let text = ''
	export let linkText = ''
	export let linkSrc = ''
	export let slice
	export let flip = false
	export let style = 0

	const styles = {
		'0': 'bg-white',
		'1': 'bg-background-3'
	}

	if(slice) {
		flip = slice.primary.flip_cta
		text = slice.primary.text_cta
		linkText = slice.primary.link_text_cta
		linkSrc = slice.primary.link_src_cta
		style = slice.primary.style_cta
	}
</script>

<Container classesInner="pt-4 pb-4 px-4 width-2xl" classesOuter={styles[style]}>
	<div class="flex gap-4 {flip ? 'flex-col' : 'flex-col-reverse'}">
		<Text field={text} classes="text-center" />

		<div class="flex flex-col justify-center w-full">
			<div class="flex flex-row justify-center px-8">
				<Link document={linkSrc} activeClass='' classes=" bg-white h2 flex gap-4 bg-white shadow-lg rounded-full px-8 py-4" >
					<Text inline field={linkText} />
					<div>
						>
					</div>
				</Link>
			</div>
		</div>
	</div>
</Container>