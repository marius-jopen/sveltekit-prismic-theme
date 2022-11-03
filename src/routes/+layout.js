import createClient from "$lib/prismic/client"

export async function load({ fetch, request }) {
	const api = await createClient({ fetch, request })
	const setup = await api.getSingle('setup');

	if (setup) {
		return {
			setup
		}
	}
}