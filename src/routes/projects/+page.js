import createClient from "$lib/prismic/setup/client"

export async function load({ parent }) {
	const api = await createClient()

	// Get shared data
  const p = await parent()
	const { document, setup } = p

  // Page specific data
	const projects = await api.getSingle('projects', {
		graphQuery: `{
			projects {
				...projectsFields
				project_order {
					selected {
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
			projects,
			setup
		};
	}
}