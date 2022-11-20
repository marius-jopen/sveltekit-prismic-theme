import createClient from "$lib/prismic/client"

export async function load({ fetch, request }) {
	const api = await createClient({ fetch, request })
	const setup = await api.getSingle('setup')
	const glossary = await api.getAllByType('glossary_item')
	const blog = await api.getAllByType('blog_post')
	const shop = await api.getAllByType('product')
	const projects = await api.getAllByType('projct')
	const pages = await api.getAllByType('page')

	if (setup && glossary && blog && shop && projects && pages) {
		return {
			setup,
			glossary,
			blog,
			shop,
			projects,
			pages
		}
	}
}