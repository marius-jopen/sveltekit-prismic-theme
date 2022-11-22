<script>
		import Navigation from "$lib/prismic/modules/navigation/navigation.svelte"

		export let setup
</script>

<footer class="px-4 py-2">
	<div class="flex gap-3 justify-center">
		<Navigation document={setup.data.navigation_footer} />
	</div>
</footer>