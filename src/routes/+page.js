import { error } from '@sveltejs/kit'
import createClient from "$lib/prismic/functionality/client"

export async function load ({ parent, fetch, request }) { // used to be `stuff`
  const api = await createClient({ fetch, request })
  const data = await parent()
  const document = await api.getSingle('home'); // Home information

  if (document) {
    return {
      ...data,
      document
    }
  }

  error(404, 'Not found')
}