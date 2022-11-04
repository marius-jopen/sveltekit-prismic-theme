<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte"
  import ProjectItem from "$lib/prismic/project-item.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import Categories from "$lib/prismic/categories.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />

<Container saos='' paddingBottom='pb-0'>
	<Text classes="h4 text-center pb-6" plain field={document.data.title} />
	<Categories type='projects' items={document.data.items} />
</Container>

<Container>
	<div class="sm:flex flex-wrap">
		{#each document.data.items as item}
			<ProjectItem item={item.item} />
		{/each}
	</div>
</Container>