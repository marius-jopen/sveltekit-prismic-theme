import createClient from "$lib/prismic/setup/client"

export async function load() {
	const api = await createClient()
	const setup = await api.getSingle('setup');

	if (setup) {
		return {
			setup
		}
	}
}