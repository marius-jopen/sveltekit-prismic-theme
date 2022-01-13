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
	import FilterItems from '$lib/items/filterItems.svelte'
    import LoopItems from '$lib/items/loopItems.svelte'

    export let document
    export let allItems
    export let sortedItems
	export let type
</script>

<div class="text-3xl py-16 border-b border-lines text-center">
    {document.data.title[0].text}
</div>

<FilterItems items={allItems.results} type={type} />
<LoopItems items={sortedItems} type={type} />