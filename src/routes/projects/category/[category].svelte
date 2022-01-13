<script context="module">
	import Prismic from "@prismicio/client"
    import Client from '../../../utils/client'

    export async function load({ page }) {
        const currentTag = page.params.category.replace("-", ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

        const tags = await Client.query(
            Prismic.Predicates.at("document.tags", [currentTag])
        )

		const filteredItems = tags.results.filter(item => item.type == 'project');

        const allItems = await Client.query(
            Prismic.Predicates.at("document.type", "project"),
        )

        return {
            props: {
                filteredItems,
                allItems,
                currentTag
            }
        }
    }
</script>

<script>
	import FilterItems from '$lib/items/filterItems.svelte'
    import LoopItems from '$lib/items/loopItems.svelte'

    export let filteredItems
    export let currentTag
    export let allItems

	allItems = allItems.results
</script>

<div class="text-3xl py-16 border-b border-lines text-center">
    {currentTag}
</div>

<FilterItems items={allItems} />
<LoopItems items={filteredItems} />