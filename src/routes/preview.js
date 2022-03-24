// import makeClient from '../../../../utils/client'
import Prismic from '@prismicio/client'
import { apiEndpoint } from '$lib/functionality/prismic/setup'
import linkResolver from '$lib/functionality/prismic/linkResolver'

export async function get ({ url }) {
  let Location = '/'

  const previewToken = url.searchParams.get('token')
  const documentId = url.searchParams.get('documentId')

  const api = await Prismic.client(apiEndpoint)
  Location = await api.getPreviewResolver(previewToken, documentId).resolve(linkResolver, '/')

  return {
    status: 302,
    headers: { Location }
  }
}