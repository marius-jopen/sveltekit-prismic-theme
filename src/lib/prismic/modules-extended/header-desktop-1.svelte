<script>
	import Navigation from "$lib/prismic/modules-basic/navigation.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let setup
</script>

<header class="fixed top-0 w-full z-20 hidden sm:block bg-background-1">
	<div class="border-b border-lines-1 px-4 h-8 justify-center flex flex-col">
		<a href="/">
			<Text plain field={setup.data.title} />
		</a>
	</div>

	<div class="border-b border-lines-1 px-4 uppercase tracking-wider text-xs justify-center flex flex-col h-8 ">
		<div class="flex gap-3">
			<Navigation document={setup.data.navigation_header} />
		</div>
	</div>
</header>

<div class="hidden sm:block h-16">
	&nbsp;
</div>