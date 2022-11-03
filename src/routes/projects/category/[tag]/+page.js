import { error } from '@sveltejs/kit'
import * as prismic from '@prismicio/client'
import { createClient } from '$lib/prismic/setup'

export async function load ({ params }) {
  const { tag } = params
  const api = await createClient()

  const document = await api.getAllByType('project', {
    predicates: [prismic.predicate.at('my.project.tag', tag)]
  })

  if (document) {
    return { document }
  }

  error(404, 'Category not found')
}