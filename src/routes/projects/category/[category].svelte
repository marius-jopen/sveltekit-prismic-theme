<script context="module">
    // Import functions which are needed to get data from the CMS
	import Prismic from "@prismicio/client"
    import Client from '../../../utils/client'

    export async function load({ page }) {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'

        // Get the current tag by checking the current URL and format it, so it can get used later on
        const currentTag = page.params.category.replace("-", ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

        // Make an array with the names of the posts which have this tag
        const tags = await Client.query(
            Prismic.Predicates.at("document.tags", [currentTag])
        )

        // Filter through all items / posts which have the name of the tag
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
	import NavigationDesktopSlot from '$lib/modulesStatic/navigations/NavigationDesktopSlot/NavigationDesktopSlot.svelte'
	import NavigationMobileSimple from '$lib/modulesStatic/navigations/NavigationMobileSimple/NavigationMobileSimple.svelte'
	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple/HeadlineSimple.svelte'
	import FilterItemsFull from '$lib/modulesStatic/repeater/filterItems/FilterItemsFull.svelte'
    import ThumbnailGrid from '$lib/modulesStatic/repeater/loops/ThumbnailGrid/ThumbnailGrid.svelte'

    // Get the data from above
    export let filteredItems
    export let currentTag
    export let allItems
	export let type
	export let setup
</script>

<NavigationDesktopSlot data={setup.data}>
	<FilterItemsFull items={allItems.results} type={type} />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={currentTag} />
<ThumbnailGrid items={filteredItems} type={type} />