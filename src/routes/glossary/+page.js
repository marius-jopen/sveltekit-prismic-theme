import { makeCases } from '$lib/tools/functions/strings'
import createClient from "$lib/prismic/functionality/client"

export async function load({
  url,
  parent,
  fetch,
  request
}) {

  const p = await parent()
	const { setup } = p

  const api = await createClient({ fetch, request })
  const category = url.searchParams.get('category') || false
  const cases = category ? makeCases(category) : false

  // Page specific data
	const document = await api.getSingle('glossary_items', {
    graphQuery: `{
      glossary_items {
        ...glossary_itemsFields
				items {
          item {
            ...on glossary_item {
              ...glossary_itemFields
						}
					}
				}
			}
		}`
	})

  // Set the array of items to show
  let filtered = document.data.items

  // Extract categories from tags
  const categories = [...new Set(document.data.items.map(({ item }) => item.tags).flat())].sort()

  // Filter items
  if (category) {
    filtered = [...document.data.items.filter(({ item }) => item.tags.some(t => cases.includes(t)))]
  }

	if (setup && document) {
		return {
      filtered,
      category,
			document,
			setup,
      categories
		};
	}
}