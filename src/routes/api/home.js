import { client } from '$lib/functionality/api/client.js'
import gql from 'graphql-tag';

export const post = async () => {
  try {
    const query = gql`
      query {
        _allDocuments {
          edges {
            node {
              _meta {
                id
              }
            }
          }
        }
      }
    `
    const { data } = await client.query({
      query,
    })

    return {
      status: 200,
      body: data,
    }
  } catch (error) {
    return { status: 500, error }
  }
}
