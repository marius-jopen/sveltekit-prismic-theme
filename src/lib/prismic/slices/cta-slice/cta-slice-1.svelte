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

	let hover = false

	const styles = {
		'0': 'transition-all duration-2000 bg-gradient-to-tl from-amber-200 via-red-200 to-blue-200 bg-size-200 bg-pos-0',
		'1': 'transition-all duration-2000 bg-gradient-to-tl from-red-200 via-amber-200 to-blue-200 bg-size-200 bg-pos-0'
	}

	if(slice) {
		flip = slice.primary.flip_cta
		text = slice.primary.text_cta
		linkText = slice.primary.link_text_cta
		linkSrc = slice.primary.link_src_cta
		style = slice.primary.style_cta
		width = slice.primary.width_cta ? slice.primary.width_cta : width
	}

	function mouseEnter() {
		hover = true
	}

	function mouseLeave() {
		hover = false
	}
</script>

<Container classInner="relative">
	<div on:mouseenter={mouseEnter} on:mouseleave={mouseLeave} class="relative z-10 flex gap-4 pt-4 pb-4 px-4 {flip ? 'flex-row' : 'flex-row-reverse'}">
		<Text field={text} classes="w-1/2" />

		<div class="flex flex-col justify-center w-1/2">
			<div class="flex flex-row justify-center px-8">
				<Link document={linkSrc} activeClass='' classes="h2 w-full flex justify-between bg-white shadow-lg hover:shadow-2xl transition-all translate-y-0	hover:-translate-y-[2px]	 rounded-full px-8 py-4" >
					<Text inline field={linkText} />
					<div>
						>
					</div>
				</Link>
			</div>
		</div>
	</div>

	<div class="{hover ? 'opacity-100 bg-pos-100' : 'opacity-50'} absolute w-full top-0 left-0 h-full z-0 bg-red-200 {styles[style]}" />
</Container>