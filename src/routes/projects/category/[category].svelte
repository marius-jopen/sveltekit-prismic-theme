<script context="module">
	import Prismic from "@prismicio/client"
    import Client from '../../../utils/client'

    export async function load({ page }) {
		const setup = await Client.getSingle('setup')

		const type = 'project'

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
	import NavigationSlot from '$lib/modules/navigations/desktop-slot/desktopSlotBar.svelte'
	import NavigationMobileSimple from '$lib/modules/navigations/mobile-simple/mobileNav.svelte'

	import HeadlineSimple from '$lib/modules/slices/headlines/headlineSimple.svelte'
	import FilterItems from '$lib/modules/items/filterItems.svelte'
	import FilterItemsTop from '$lib/modules/items/filterItemsTop.svelte'
    import LoopItems from '$lib/modules/items/loopItems.svelte'

    export let filteredItems
    export let currentTag
    export let allItems
	export let type
	export let setup
</script>

<NavigationSlot data={setup.data}>
	<FilterItemsTop items={allItems.results} type={type} />
</NavigationSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={currentTag} />
<FilterItems items={allItems.results} type={type} />
<LoopItems items={filteredItems} type={type} />