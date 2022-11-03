import { error } from '@sveltejs/kit'
import createClient from '$lib/prismic/setup/client'

export async function load({params }) {
  const api = createClient()

  const { uid } = params
  console.log(uid)
  const document = await api.getByUID('page', uid)

  if (document) {
    return { document }
  }

  error(404, 'Not found')
}