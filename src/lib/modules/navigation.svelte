<script>
	import Link from "$lib/prismic/link.svelte"
	import Text from "$lib/prismic/text.svelte"
	export let setup
</script>

<div class="flex gap-1">
	{#each setup.data.navigation_header as { title, link }}
		<Link document={link}>
			<Text inline field={title} />
		</Link>
	{/each}
</div>