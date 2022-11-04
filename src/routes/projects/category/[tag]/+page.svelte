<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte"
  import Text from "$lib/prismic/atoms/text.svelte"
	import Categories from "$lib/prismic/categories.svelte"
	import ProjectItem from "$lib/prismic/project-item.svelte"

	export let data

	const { setup, documents, document} = data
</script>

<Seo {setup} {document} />

<Container saos='' paddingBottom='pb-0'>
	<Text classes="h4 text-center pb-6" plain field={document.data.title} />
	<Categories type='projects' items={document.data.items} />
</Container>

<Container>
	<div class="sm:flex flex-wrap">
		{#each documents as document}
			<ProjectItem item={document} />
		{/each}
	</div>
</Container>