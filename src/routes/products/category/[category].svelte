<script context="module">
	import Prismic from "@prismicio/client"
    import Client from '../../../utils/client'

    export async function load({ page }) {
		const setup = await Client.getSingle('setup')

		const type = 'product'

        const currentTag = page.params.category.replace("-", ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

        const tags = await Client.query(
            Prismic.Predicates.at("document.tags", [currentTag])
        )

		const filteredItems = tags.results.filter(item => item.type == type);

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
	import SeoExport from '$lib/functionality/seo/SeoExport.svelte'

	import NavigationDesktopSlot from '$lib/modulesStatic/navigations/desktop/NavigationDesktopSlot.svelte'
	import NavigationMobileSimple from '$lib/modulesStatic/navigations/mobile/NavigationMobileSimple.svelte'

	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple.svelte'
	import FilterItemsTop from '$lib/modulesStatic/items/filterItems/FilterItemsTop.svelte'
    import LoopItemsSimple from '$lib/modulesStatic/items/loopItems/LoopItemsSimple.svelte'

    export let filteredItems
    export let currentTag
    export let allItems
	export let type
	export let setup
</script>

<SeoExport document={document.data} />

<NavigationDesktopSlot data={setup.data}>
	<FilterItemsTop items={allItems.results} type={type} />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={currentTag} />
<LoopItemsSimple items={filteredItems} type={type} />