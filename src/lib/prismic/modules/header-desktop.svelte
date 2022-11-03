<script>
	import Navigation from "$lib/prismic/nav-header.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let setup
</script>

<header class="justify-between px-2 py-2 hidden sm:flex">
	<a href="/">
		<Text plain field={setup.data.title} />
	</a>

	<div class="flex gap-3">
		<Navigation {setup} />
	</div>
</header>