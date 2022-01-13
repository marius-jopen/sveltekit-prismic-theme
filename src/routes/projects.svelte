<script context="module">
    import Prismic from "@prismicio/client"
    import Client from '../utils/client'

    export async function load({ page }) {
        const pageName = page.path.replace('/', '')

        const document = await Client.getSingle(pageName)

        const allItems = await Client.query(
            Prismic.Predicates.at("document.type", "project"),
        )

        const sortedItems = document.data.project_order.map(i => {
			const uid = i.selected_project.uid
            return allItems.results.find(p => p.uid === uid)
        })

        return {
            props: {
				sortedItems,
                document,
                allItems
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

	allItems = allItems.results
</script>

<div class="text-3xl py-16 border-b border-lines text-center">
    {document.data.title[0].text}
</div>

<FilterItems items={allItems} />
<LoopItems items={sortedItems} />