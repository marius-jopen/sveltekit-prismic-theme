import { error } from '@sveltejs/kit'
import { titleCase, kebabCase } from '$lib/tools/strings'
import * as prismic from '@prismicio/client'
import createClient from '$lib/prismic/client'

export async function load ({ params, fetch, request }) {
  const { tag } = params
  const api = await createClient({ fetch, request })

  // make different cases
  const cases = [
    kebabCase(titleCase(tag)), kebabCase(tag.toLowerCase()), kebabCase(tag.toUpperCase())
  ]

  const response = await api.getAllByType('project', {
    predicates: [prismic.predicate.any('document.tags', [...cases])]
  })


  if (response) {
    return { documents: response }
  }

  error(404, 'Category not found')
}