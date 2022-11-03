import createClient from "$lib/prismic/client"

export async function load({ parent, fetch, request }) {
	const api = await createClient({ fetch, request })

	// Get shared data
  const p = await parent()
	const { setup } = p

  // Page specific data
	const document = await api.getSingle('projects', {
		graphQuery: `{
			projects {
				...projectsFields
				items {
					item {
						...on project {
						...projectFields
						}
					}
				}
			}
		}`
	})

	if (setup && document) {
		return {
			document,
			setup
		};
	}
}