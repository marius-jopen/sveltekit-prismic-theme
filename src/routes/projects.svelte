<script context="module">
    // Import functions which are needed to get data from the CMS
    import Prismic from "@prismicio/client"
    import Client from '../utils/client'

    export async function load({ url }) {

        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'

        // Get current page name'
        const pageName = url.pathname.replace('/', '')

        // Get the content from the current page
		const document = await Client.getSingle(pageName)

        // Get all items from the post-type. For example project or product
        const allItems = await Client.query(
            Prismic.Predicates.at("document.type", type),
        )

        // Check if those items are in the list of selected projects on the current page
        // And then put them into an array
        // This allows the user to sort the items and not just show ALL the projects
        const sortedItems = document.data.project_order.map(i => {
			const uid = i.selected.uid
            return allItems.results.find(p => p.uid === uid)
        })

        // From the orted items list, find the projects which have the 'Normal' view and put them into an array
        // A project can also have a different view set up. For example 'Related'
        // And then it would not work in some loops, because some important fields would be empty
        const sortedItemsNormal = []
        
        sortedItems.map(i => {
            if(i.data.view == 'Normal' || i.data.view == null) {
                sortedItemsNormal.push(i)
            }
        })

        // Return the data which we got above
        return {
            props: {
				sortedItems,
                document,
                allItems,
				type,
				setup,
                sortedItemsNormal
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
	import NavigationContentScroll from '$lib/modules-static/navigations/navigation-desktop-content-scroll/navigation-desktop-content-scroll.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import AccordeonComplex from '$lib/modules-static/repeater/loops/accordeon-complex/accordeon-complex.svelte'
    import TypoGridLoop from '$lib/modules-static/repeater/loops/typo-grid/typo-grid.svelte'
    import SliderVideoFullscreen from '$lib/modules-static/repeater/loops/slider-video-fullscreen/slider-video-fullscreen.svelte'

    // Get the data from above
    export let document
	export let setup
    export let sortedItems
	export let type
    export let allItems
    export let sortedItemsNormal
</script>

<NavigationContentScroll data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<TypoGridLoop items={sortedItemsNormal} type={type} />
<AccordeonComplex items={sortedItemsNormal} type={type} />
<SliderVideoFullscreen items={sortedItems} allItems={allItems} type={type} />