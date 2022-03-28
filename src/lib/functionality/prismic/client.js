import Prismic from '@prismicio/client';
import { apiEndpoint } from '$lib/functionality/prismic/setup'

const makeClient = async (cookie) => {
  const options = {
    req: {
      headers: {
        cookie
      }
    }
  }

  const client = await Prismic.client(apiEndpoint, options)

  return client
}

export default makeClient;