<script context="module">
    // Import functions which are needed to get data from the CMS
    import Prismic from "@prismicio/client"
    import makeClient from '$lib/components/functionality/prismic/client'

    export async function load({ url, session }) {
        // Get api from client and include the session cookie which is important for the preview mode
        const api = await makeClient(session.cookie)

        // Get data from setup page
		const setup = await api.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'

        // Get current page name'
        // const types = url.pathname.replace('/', '')
        const types = 'projects'

        // Get the content from the current page
		const document = await api.getSingle(types)

        // Get all items from the post-type. For example project or product
        const allItems = await api.query(
            Prismic.Predicates.at("document.type", type),
        )

        // Check if those items are in the list of selected projects on the current page
        // And then put them into an array
        // This allows the user to sort the items and not just show ALL the projects
        const sortedItems = document.data.project_order.map(i => {
			const uid = i.selected.uid
            return allItems.results.find(p => p.uid === uid)
        })

        // Return the data which we got above
        return {
            props: {
				setup,
				type,
                sortedItems
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import TypoGrid from '$lib/modules-static/repeater/loops/typo-grid/typo-grid.svelte'

    // Get the data from above
	export let setup
	export let type
    export let sortedItems
</script>

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<TypoGrid items={sortedItems} type={type} />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Typo Grid
    </h3>

    <li>
        Displays a three columm grid of projects without images.
    </li>
</div>