import createClient from "$lib/utilities/prismic/client"

export async function load() {
	const api = await createClient()
	const setup = await api.getSingle('setup');
	const document = await api.getSingle('home');

	if (setup && document) {
		return {
			document,
			setup
		};
	}
}