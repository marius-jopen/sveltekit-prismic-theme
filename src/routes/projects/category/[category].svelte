<script context="module">
	// Import functions which are needed to get data from the CMS
	import Prismic from '@prismicio/client';
	import makeClient from '$lib/functionality/prismic/client';

	// Import function which uppercases first letter of every word
	import { capitalize } from 'lodash'

	export async function load({ session, params }) {
        // Get api from client and include the session cookie which is important for the preview mode
    	const api = await makeClient(session.cookie)

		// Get current category uid
		const { category } = params;

		// Get data from setup page
		const setup = await api.getSingle('setup');

		// Define the type of the post-type. For example project or product
		const type = 'project';

		// NOTE that tags in Prismic are ALWAYS case sensitive
		// e.g. liquid -> Liquid
		const filteredItems = await api.query([
			Prismic.Predicates.at('document.tags', [capitalize(category)]),
			Prismic.Predicates.at('document.type', type)
		]);

		// A list of all items
		const allItems = await api.query(
			Prismic.Predicates.at('document.type', type)
		);

		// Set document to setup to avoid empty document array for SEO
    	const document = setup

		return {
			props: {
				filteredItems,
				allItems,
				category,
				type,
				setup,
        		document
			}
		};
	}
</script>

<script>
	// Import all components which will be used on this page
	import Seo from '$lib/functionality/seo/seo.svelte';
	import NavigationDesktopSlot from '$lib/modules-static/navigations/navigation-desktop-slot/navigation-desktop-slot.svelte';
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte';
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

<NavigationDesktopSlot data={setup.data}>
	<FilterItemsFull items={allItems.results} type={type} />
</NavigationDesktopSlot>

<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={category} />

<ThumbnailGrid items={filteredItems.results} type={type} /> 