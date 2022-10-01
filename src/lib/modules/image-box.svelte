<script>
	import Container from "$lib/tools/container.svelte"
	import Grid from "$lib/tools/grid.svelte"
	import Text from "$lib/prismic/text.svelte"
	import Image from "$lib/prismic/image.svelte"

	export let text
	export let bgColor
	export let width
	export let src
</script>

<Container {bgColor} {width} >
	<Grid>
		<div class="col-span-12 bg-white">
			<Image {src} classes="rounded-3xl" />

			<Text classes="text-xl font-bold">
				{text}
			</Text>
		</div>
	</Grid>
</Container>