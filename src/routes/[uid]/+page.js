import { error } from '@sveltejs/kit'
import createClient from '$lib/prismic/client'

export async function load({ params, fetch, request }) {
  const api = createClient({ fetch, request })
  const { uid } = params

  try {
    const document = await api.getByUID('page', uid)

    return { document }
  } catch (e) {
    // Show user the page not found error
    throw error(404, e.message)
  }
}