<script context="module">
    // Import functions which are needed to get data from the CMS
    import Prismic from "@prismicio/client"
    import Client from '$lib/functionality/client/client'

    export async function load({ url }) {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'

        // Get current page name'
        // const types = url.pathname.replace('/', '')
        const types = 'projects'

        // Get the content from the current page
		const document = await Client.getSingle(types)

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
    import AccordeonComplex from '$lib/modules-static/repeater/loops/accordeon-complex/accordeon-complex.svelte'

    // Get the data from above
	export let setup
	export let type
    export let sortedItems
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<AccordeonComplex items={sortedItems} type={type} />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Accordeon Complex
    </h3>

    <li>
        Displays a list of projects as accordeons.
    </li>

    <li>
        By opening one accordeon, the other accordeons close.
    </li>

    <li>
        Sort function to sort the items by title or other fields. This can be done by chaning the array in the child composition AccordeonComplexSort. Inside each of the array items, a different field can be targeted. Also it is possible to change the styling for each sort item. When changing the sort items, it is also recommended to change the items in the hader-area of each accordeon item in the child component ItemAccordeonList.
    </li>

    <li>
        Search function to search through fields within the project. To add more fields into the search, change the function called search inside this child component AccordeonComplexSearch. Until now the fields MUST contain information otherwise the search does not work.
    </li>

    <li>
        Load more button to show more projects. The number of projects which are displayed can be changed in this child compnent AccordeonComplexLoop. Change the variable visibleItems.
    </li>

    <li>
        When an accordeon opens, the url of the page changes to the project ID. When opening this URl from a new window, the page scrolls down to that project and opens it. Still has some bugs.
    </li>

    <li>
        To change content in the accordeon items, change it here: AccordeonComplexItemContent
    </li>
</div>