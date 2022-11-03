<script>
	import Navigation from "$lib/prismic/nav-header.svelte"

	export let setup
</script>

<header class="flex justify-between">
	<div>
		Logo
	</div>

	<Navigation {setup} />
</header>