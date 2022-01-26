import { client } from '$lib/functionality/api/client.js'
import gql from 'graphql-tag';

export const post = async ({ body }) => {
	try {
		const query = gql`
			query($slug: String!, $lang: String!) {
				product (uid: $slug, lang: $lang) {
					title
					description
				}
			}
		`

		const variables = {
			slug: body.slug,
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