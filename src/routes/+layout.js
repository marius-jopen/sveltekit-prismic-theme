import createClient from "$lib/prismic/functionality/client"

export async function load({ fetch, request }) {
	const api = await createClient({ fetch, request })
	const setup = await api.getSingle('setup')
	const glossary = await api.getAllByType('glossary_item')

	if (setup && glossary) {
		return {
			setup,
			glossary
		}
	}
}