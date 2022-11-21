<script>
	import Link from "$lib/prismic/atoms/link.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let document
</script>

<div class="flex flex-col">
	{#each document as { title, link }}
		<Link document={link}>
			<Text inline field={title} />
		</Link>
	{/each}
</div>