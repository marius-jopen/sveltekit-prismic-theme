<script>
	import Navigation from "$lib/prismic/nav-header.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let setup
</script>

<header class="flex justify-between px-2 py-2">
	<div>
		<a href="/">
			<Text plain field={setup.data.title} />
		</a>
	</div>

	<Navigation {setup} />
</header>