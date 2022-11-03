<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte";
	import Text from "$lib/prismic/text.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />

<Container>
	<Text field={document.data.title} />

	<div class="pt-2">
		Categories
		<a href="/projects/category/blue" class="block">
			Blue
		</a>

		<a href="/projects/category/brown" class="block">
			Brown
		</a>

		<a href="/projects/category/pink" class="block">
			Pink
		</a>
	</div>

	<div class="pt-2">
		Projects

		{#each document.data.items as item}
			<a href="/projects/{item.item.data.uid}" class="block">
				{item.item.data.title}
			</a>
		{/each}
	</div>
</Container>