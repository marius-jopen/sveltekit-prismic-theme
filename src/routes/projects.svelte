<script context="module">
    import Prismic from "@prismicio/client"
    import Client from '../utils/client'

    export async function load({ page }) {
		const setup = await Client.getSingle('setup')

		const type = 'project'

        const pageName = page.path.replace('/', '')

		const document = await Client.getSingle(pageName)

        const allItems = await Client.query(
            Prismic.Predicates.at("document.type", type),
        )

        const sortedItems = document.data.order.map(i => {
			const uid = i.selected.uid
            return allItems.results.find(p => p.uid === uid)
        })

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
	import NavigationSlot from '$lib/modules/navigations/desktop-slot/desktopSlotBar.svelte'
	import NavigationMobileSimple from '$lib/modules/navigations/mobile-simple/mobileNav.svelte'

	import HeadlineSimple from '$lib/modules/slices/headlines/headlineSimple.svelte'
	import FilterItems from '$lib/modules/items/filterItems.svelte'
	import FilterItemsTopFull from '$lib/modules/items/filterItemsTopFull.svelte'
    import LoopItems from '$lib/modules/items/loopItems.svelte'

    export let document
    export let allItems
    export let sortedItems
	export let type
	export let setup
</script>

<NavigationSlot data={setup.data}>
	<FilterItemsTopFull items={allItems.results} type={type} />
</NavigationSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<LoopItems items={sortedItems} type={type} />