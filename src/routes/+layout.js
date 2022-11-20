import createClient from "$lib/prismic/client"

export async function load({ fetch, request }) {
	const api = await createClient({ fetch, request })
	const setup = await api.getSingle('setup')
	const glossary_items = await api.getAllByType('glossary_item')

	if (setup && glossary_items) {
		return {
			setup,
			glossary_items
		}
	}
}