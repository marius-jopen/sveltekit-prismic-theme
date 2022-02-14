<script context="module">
    // Import functions which are needed to get data from the CMS
    import Prismic from "@prismicio/client"
    import Client from '../utils/client'

    export async function load({ page }) {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'

        // Get current page name'
        const pageName = page.path.replace('/', '')

        // Get the content from the current page
		const document = await Client.getSingle(pageName)

        // Get all items from the post-type. For example project or product
        const allItems = await Client.query(
            Prismic.Predicates.at("document.type", type),
        )

        // Check if those items are in the list of selected projects on the current page
        // And then put them into an array
        // This allows the user to sort the items and not just show ALL the projects
        const sortedItems = document.data.order.map(i => {
			const uid = i.selected.uid
            return allItems.results.find(p => p.uid === uid)
        })

        // Return the data which we got above
        return {
            props: {
				sortedItems,
                document,
                allItems,
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
    import AccordeonComplex from '$lib/modulesStatic/repeater/loops/AccordeonComplex/AccordeonComplex.svelte'
    import TypoGridLoop from '$lib/modulesStatic/repeater/loops/TypoGrid/TypoGrid.svelte'

    // Get the data from above
    export let document
	export let setup
    export let allItems
    export let sortedItems
	export let type
</script>

<NavigationDesktopSlot data={setup.data}>
	<FilterItemsFull items={allItems.results} type={type} />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<AccordeonComplex items={sortedItems} type={type} />
<TypoGridLoop items={sortedItems} type={type} />