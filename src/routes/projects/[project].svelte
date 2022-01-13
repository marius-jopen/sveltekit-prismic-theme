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
    import LoopItems from '$lib/items/loopItems.svelte'
	import HeadlineSimple from '$lib/addons/slices/headlines/headlineSimple.svelte'
	import ImageSimple from "$lib/addons/slices/images/imageSimple.svelte"

    export let document
	export let sortedItems
	export let type
</script>

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<ImageSimple inputImage={document.data.thumbnail} />
<HeadlineSimple inputHeadline={"All Projects"} />
<LoopItems items={sortedItems} type={type} />