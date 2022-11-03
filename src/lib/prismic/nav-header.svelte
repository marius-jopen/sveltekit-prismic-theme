<script>
	import Link from "$lib/prismic/atoms/link.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"
	export let setup
</script>

<div class="flex gap-1">
	{#each setup.data.navigation_header as { title, link }}
		<Link document={link}>
			<Text inline field={title} />
		</Link>
	{/each}
</div>