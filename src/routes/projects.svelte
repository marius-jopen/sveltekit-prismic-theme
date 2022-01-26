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
	import SeoExport from '$lib/functionality/seo/SeoExport.svelte'

	import NavigationDesktopSlot from '$lib/modulesStatic/navigations/desktop/NavigationDesktopSlot.svelte'
	import NavigationMobileSimple from '$lib/modulesStatic/navigations/mobile/NavigationMobileSimple.svelte'

	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple.svelte'
	import FilterItemsFull from '$lib/modulesStatic/items/filterItems/FilterItemsFull.svelte'
    import LoopItemsSimple from '$lib/modulesStatic/items/loopItems/LoopItemsSimple.svelte'

    export let document
    export let allItems
    export let sortedItems
	export let type
	export let setup
</script>

<SeoExport document={document.data} />

<NavigationDesktopSlot data={setup.data}>
	<FilterItemsFull items={allItems.results} type={type} />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<LoopItemsSimple items={sortedItems} type={type} />