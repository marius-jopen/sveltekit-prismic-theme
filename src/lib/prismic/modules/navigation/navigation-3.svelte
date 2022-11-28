<script>
	import Link from "$lib/prismic/atoms/link.svelte"
	import Text from "$lib/prismic/atoms/text.svelte"

	export let document
</script>

{#each document as { title, link }}
	<div class="flex justify-center pb-4">
		<Link document={link} classes="bg-white rounded-full shadow-md px-8 p2 py-2">
			<Text inline field={title} />
		</Link>
	</div>
{/each}