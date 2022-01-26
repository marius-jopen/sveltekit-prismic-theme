<script context="module">
    import Client from '../../utils/client'
    import Prismic from "@prismicio/client"

    export async function load({ page }) {
		const setup = await Client.getSingle('setup')

		const type = 'product'

        const pageName = page.params.project

        const document = await Client.getByUID(type, pageName)

		const itemPage = await Client.getSingle(type + 's')

		const allItems = await Client.query(
            Prismic.Predicates.at("document.type", type),
        )

        const sortedItems = itemPage.data.order.map(i => {
			const uid = i.selected.uid
            return allItems.results.find(p => p.uid === uid)
        })

        return {
            props: {
                document,
				sortedItems,
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

	import BackHistory from "$lib/functionality/BackHistory.svelte"
	import LayoutColumn from "$lib/modulesStatic/items/layout/layoutColumn/LayoutColumn.svelte"

    export let document
	export let setup
</script>

<SeoExport document={document.data} />

<NavigationDesktopSlot data={setup.data}>
	<BackHistory />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<LayoutColumn input={document.data} />