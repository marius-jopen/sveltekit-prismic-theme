<script>
  // Import all components which will be used on this page
  import Seo from '$lib/components/functionality/seo/index.svelte'
  import FilterItemsHorizontal from '$lib/components/modules/repeater/filters/filter-items-horizontal/index.svelte'
  import ThumbnailGrid from '$lib/components/modules/repeater/loops/thumbnail-grid/index.svelte'

  // Get the data from above
	export let data
  export let type = 'project'

  const { setup, document, projects } = data

  const items = projects.data.project_order

</script>

<Seo {setup} {document} />

<FilterItemsHorizontal {items} />

<ThumbnailGrid {items} {type} />