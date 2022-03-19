<script context="module">
    // Import functions which are needed to get data from the CMS
    import Prismic from "@prismicio/client"
    import Client from '../../../../utils/client'

    export async function load({ url }) {

        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'

        // Get current page name'
        // const pageName = url.pathname.replace('/', '')
        const pageName = 'projects'

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

        // From the sorted items list, find the projects which have the 'Normal' view and put them into an array
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
				type,
				setup,
                sortedItemsNormal
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import ThumbnailShopGridHover from '$lib/modules-static/repeater/loops/thumbnail-shop-grid-hover/thumbnail-shop-grid-hover.svelte'

    // Get the data from above
	export let setup
	export let type
    export let sortedItemsNormal
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<div class="bg-neutral-100 min-h-screen w-full">
    <ThumbnailShopGridHover items={sortedItemsNormal} type={type} />
</div>