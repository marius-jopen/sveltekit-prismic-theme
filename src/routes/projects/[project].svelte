<script context="module">
    import Client from '../../utils/client'
    import Prismic from "@prismicio/client"

    export async function load({ page }) {
		const type = 'project'

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
				type
            }
        }
    }
</script>

<script>
	import AllSlices from '$lib/addons/slices/allSlices.svelte'
    import LoopItems from '$lib/items/loopItems.svelte'

    export let document
	export let sortedItems
	export let type
</script>

<div class="text-3xl py-16 border-b border-lines text-center">
    {document.data.title[0].text}
</div>

<img src="{document.data.thumbnail.Small.url}" class="w-full border-b border-lines" alt="">

<AllSlices slices="{document.data.body}" />

<div class="text-3xl py-16 border-b border-lines text-center">
    All Projects
</div>

<LoopItems items={sortedItems} type={type} />