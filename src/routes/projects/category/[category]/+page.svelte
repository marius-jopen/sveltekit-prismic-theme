<script>
	// Import all components which will be used on this page
	import Seo from '$lib/components/functionality/seo/seo.svelte';
  import NavigationDesktopSlot from '$lib/components/modules/navigations/navigation-desktop-slot/index.svelte'
	import FilterItemsFull from '$lib/components/modules/repeater/filters/filter-items-full/index.svelte';
	import ThumbnailGrid from '$lib/components/modules/repeater/loops/thumbnail-grid/index.svelte';

	// Get the data from above
	export let filteredItems
	export let category
	export let allItems
	export let type
	export let setup
	export let document
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopSlot data={setup.data}>
	<FilterItemsFull items={allItems.results} type={type} />
</NavigationDesktopSlot>

<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={category} />

<ThumbnailGrid items={filteredItems} type={type} /> 