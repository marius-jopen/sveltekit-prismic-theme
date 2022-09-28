<script>
	import Seo from '$lib/components/functionality/seo/index.svelte'
	import FilterItemsHorizontal from '$lib/components/modules/repeater/filters/filter-items-horizontal/index.svelte'
	import ThumbnailGrid from '$lib/components/modules/repeater/loops/thumbnail-grid/index.svelte'

	export let data
	export let type = 'project'

	const { setup, document, projects } = data
	const items = projects.data.project_order
</script>

<Seo {setup} {document} />

<FilterItemsHorizontal {items} />

<ThumbnailGrid {items} {type} />