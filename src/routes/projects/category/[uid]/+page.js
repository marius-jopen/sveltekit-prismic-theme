import { error } from '@sveltejs/kit'
import { createClient } from '$lib/prismic/setup'

export async function load ({ params }) {
  const { uid } = params
  const api = await createClient()

  const document = await api.query()

  if (document) {
    return { document }
  }

  error(404, 'Category not found')
}