<script context="module">
	import Prismic from "@prismicio/client"
    import Client from '../../../utils/client'

    export async function load({ page }) {

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
				type
            }
        }
    }
</script>

<script>
	import HeadlineSimple from '$lib/addons/slices/headlines/headlineSimple.svelte'
	import FilterItems from '$lib/items/filterItems.svelte'
    import LoopItems from '$lib/items/loopItems.svelte'

    export let filteredItems
    export let currentTag
    export let allItems
	export let type
</script>

<HeadlineSimple inputHeadline={currentTag} />
<FilterItems items={allItems.results} type={type} />
<LoopItems items={filteredItems} type={type} />