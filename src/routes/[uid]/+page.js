import { error } from '@sveltejs/kit'
import createClient from '$lib/prismic/setup/client'

export async function load({ params }) {
  const { uid } = params

  console.log(uid)
  const client = createClient()
  const document = await client.getByUID('page', uid)

  if (document) {
    return { document }
  }

  error(404, 'Not found')
}