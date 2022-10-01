<script>
	import Container from "$lib/tools/container.svelte"
	import Grid from "$lib/tools/grid.svelte"
	import Text from "$lib/prismic/text.svelte";

	export let text
	export let bgColor
	export let width
</script>

<Container {bgColor} {width} >
	<Grid>
		<div class="col-span-12 py-4 bg-white rounded-md">
			<Text classes="text-center text-xl font-light">
				{text}
			</Text>
		</div>
	</Grid>
</Container>