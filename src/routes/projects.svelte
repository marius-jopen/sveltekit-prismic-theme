<script context="module">
    import Prismic from "@prismicio/client"
    import Client from '../utils/client'

    export async function load({ page }) {
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
				type
            }
        }
    }
</script>

<script>
	import HeadlineSimple from '$lib/modules/slices/headlines/headlineSimple.svelte'
	import FilterItems from '$lib/modules/items/filterItems.svelte'
    import LoopItems from '$lib/modules/items/loopItems.svelte'

    export let document
    export let allItems
    export let sortedItems
	export let type
</script>

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<FilterItems items={allItems.results} type={type} />
<LoopItems items={sortedItems} type={type} />