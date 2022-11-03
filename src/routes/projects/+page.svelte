<script>
	import Seo from "$lib/prismic/seo.svelte"
  import Container from "$lib/tools/container.svelte";
  import Link from "$lib/prismic/link.svelte"
  import Text from "$lib/prismic/text.svelte"

	export let data

	const { setup, document } = data
</script>

<Seo {setup} {document} />

<Container>
	<div>
		{document.data.title}
	</div>

	<div>
		This page works fine and display the content from the home page and the projects which are selected. The categories are put in manually.
	</div>

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
      <div class="block">
        <!-- {console.log(item.item)} -->
        <Link document={item.item}>
          <Text field={item.item.data.title} />
        </Link>
      </div>
		{/each}
	</div>
</Container>