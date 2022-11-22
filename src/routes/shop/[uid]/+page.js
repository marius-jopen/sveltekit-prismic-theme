import { error } from '@sveltejs/kit'
import createClient from '$lib/prismic/functionality/client'

export async function load({ fetch, params, request }) {
  const { uid } = params

  const api = createClient({ fetch, request })
  const document = await api.getByUID('product', uid)

  if (document) {
    return { document }
  }

  error(404, 'Not found')
}