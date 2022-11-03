import { error } from '@sveltejs/kit'

import createClient from '$lib/prismic/setup/client'

export async function load({ fetch, params, request }) {
  const { uid } = params
  const client = createClient({ fetch, request })
  const document = await client.getByUID('project', uid)

  if (document) {
    return { document }
  }

  error(404, 'Not found')
}