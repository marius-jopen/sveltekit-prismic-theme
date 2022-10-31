<script>
	import Container from "$lib/tools/container.svelte"
	import Navigation from "$lib/modules/navigation.svelte"

	export let setup
</script>

<Container width='full' >
	<header class="flex justify-between">
		<div>
			Logo
		</div>

		<Navigation {setup} />
	</header>
</Container>