// Import functions which are needed to get data from the CMS
import createClient from "$lib/services/prismic/client"

export async function load({ parent }) {
  const api = await createClient()
  const p = await parent()
  const { document, setup } = p
  
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
    // Return the data which we got above
    return {
      document,
      projects,
      setup
    };
  }
}