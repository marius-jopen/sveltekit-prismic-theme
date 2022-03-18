<script context="module">
    // Import functions which are needed to get data from the CMS
	import Prismic from "@prismicio/client"
    import Client from '../../../utils/client'

    export async function load({ url }) {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'
        const types = 'projects'

        // Get the current tag by checking the current URL and format it, so it can get used later on
        const currentTag = url.pathname.replace('/' + {types} + '/category/', '').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

        // Make an array with the names of the posts which have this tag
        const tags = await Client.query(
            Prismic.Predicates.at("document.tags", [currentTag])
        )

        // Filter this array above to only have items from the current post-type
		const filteredItems = tags.results.filter(item => item.type == type);

        // A list of all items
        const allItems = await Client.query(
            Prismic.Predicates.at("document.type", type),
        )

        return {
            props: {
                filteredItems,
                allItems,
                currentTag,
				type,
				setup
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
    import Seo from '$lib/functionality/seo/seo.svelte'
    import NavigationDesktopSlot from '$lib/modules-static/navigations/navigation-desktop-slot/navigation-desktop-slot.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'
	import FilterItemsFull from '$lib/modules-static/repeater/filters/filter-items-full/filter-items-full.svelte'
    import ThumbnailGrid from '$lib/modules-static/repeater/loops/thumbnail-grid/thumbnail-grid.svelte'

    // Get the data from above
    export let filteredItems
    export let currentTag
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

<HeadlineSimple inputHeadline={currentTag} />
<ThumbnailGrid items={filteredItems} type={type} />