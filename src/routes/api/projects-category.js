import { client } from '$lib/functionality/api/client.js'
import gql from 'graphql-tag';

export const post = async ({ body }) => {
	try {
		const query = gql`
			query($tag: String!,$lang: String!) {
				allProjects(lang: $lang, tags: $tag) {
					edges {
					  node {
						title
					  }
					}
				}
			}
		`

		const variables = {
			tag: body.tag,
			lang: body.lang
		}

		const { data } = await client.query({
			query,
			variables
		})

		return {
			status: 200,
			body: data,
		}
	} catch (error) {
		return { status: 500, error }
	}
}