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
	import NavigationDesktopSlot from '$lib/modulesStatic/navigations/NavigationDesktopSlot/NavigationDesktopSlot.svelte'
	import NavigationMobileSimple from '$lib/modulesStatic/navigations/mobile/NavigationMobileSimple.svelte'

	import HeadlineSimple from '$lib/modulesFlex/headlines/HeadlineSimple/HeadlineSimple.svelte'
	import FilterItemsFull from '$lib/modulesStatic/repeater/filterItems/FilterItemsFull.svelte'
    import LoopItemsSimple from '$lib/modulesStatic/repeater/loops/simple/LoopItemsSimple.svelte'

    export let filteredItems
    export let currentTag
    export let allItems
	export let type
	export let setup
</script>

<NavigationDesktopSlot data={setup.data}>
	<FilterItemsFull items={allItems.results} type={type} />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={currentTag} />
<LoopItemsSimple items={filteredItems} type={type} />