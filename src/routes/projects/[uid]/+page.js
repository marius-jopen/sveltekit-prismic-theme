import { error } from '@sveltejs/kit'
import createClient from '$lib/prismic/setup/client'

export async function load({ params }) {
  const { uid } = params
  
  const api = createClient()
  const document = await api.getByUID('project', uid)

  if (document) {
    return { document }
  }

  error(404, 'Not found')
}