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
	import NavigationSlot from '$lib/modules/navigations/desktop-slot/desktopSlotBar.svelte'
	import NavigationMobileSimple from '$lib/modules/navigations/mobile-simple/mobileNav.svelte'

	import HeadlineSimple from '$lib/modules/slices/headlines/headlineSimple.svelte'
	import ImageSimple from "$lib/modules/slices/images/imageSimple.svelte"
	import BackHistory from "$lib/modules/functionality/backHistory.svelte"

    export let document
	export let setup
</script>

<NavigationSlot data={setup.data}>
	<BackHistory />
</NavigationSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<ImageSimple inputImage={document.data.thumbnail} />