import { error } from '@sveltejs/kit'
import { titleCase, kebabCase } from '$lib/tools/strings'
import * as prismic from '@prismicio/client'
import createClient from '$lib/prismic/setup/client'

export async function load ({ params }) {
  const { tag } = params
  const api = await createClient()

  // make different cases
  const cases = [
    kebabCase(titleCase(tag)), kebabCase(tag.toLowerCase()), kebabCase(tag.toUpperCase())
  ]

  const response = await api.getAllByType('project', {
    predicates: [prismic.predicate.any('document.tags', [...cases])]
  })


  if (response) {
    console.log('response', response)
    return { documents: response }
  }

  error(404, 'Category not found')
}