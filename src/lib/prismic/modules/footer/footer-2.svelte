<script>
	import Navigation from "$lib/prismic/modules/navigation/navigation.svelte"
	import Image from "$lib/prismic/atoms/image.svelte"
	import Container from "$lib/tools/container.svelte"

	export let setup
</script>

<footer class="pt-20 pb-24">
	{#each setup.data.footer_logos as item}
		<Container classesOuter="pb-12" classesInner="width-xs" >
			<Image src={item.image_footer_logos} />
		</Container>
	{/each}

	<div class="flex-col sm:flex-row flex gap-3 justify-center p2">
		<Navigation document={setup.data.navigation_footer} />
	</div>
</footer>