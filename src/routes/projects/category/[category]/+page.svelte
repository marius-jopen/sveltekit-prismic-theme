<script>
	// Import all components which will be used on this page
	import Seo from '$lib/components/functionality/seo/seo.svelte';
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte';
	import FilterItemsFull from '$lib/modules-static/repeater/filters/filter-items-full/filter-items-full.svelte';
	import ThumbnailGrid from '$lib/modules-static/repeater/loops/thumbnail-grid/thumbnail-grid.svelte';

	// Get the data from above
	export let filteredItems
	export let category
	export let allItems
	export let type
	export let setup
	export let document
</script>

<Seo setup={setup.data} document={document.data} />

<!-- <NavigationDesktopSlot data={setup.data}>
	<FilterItemsFull items={allItems.results} type={type} />
</NavigationDesktopSlot>

<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={category} />

<ThumbnailGrid items={filteredItems.results} type={type} />  -->