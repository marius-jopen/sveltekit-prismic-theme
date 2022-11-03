<script>
	import Navigation from "$lib/modules/navigation.svelte"

	export let setup
</script>

<header class="flex justify-between">
	<div>
		Logo
	</div>

	<Navigation {setup} />
</header>