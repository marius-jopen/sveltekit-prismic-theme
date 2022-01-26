import { client } from '$lib/functionality/api/client.js'
import gql from 'graphql-tag';

export const post = async ({ body }) => {
	try {
		const query = gql`
			query($slug: String!) {
				project (uid: $slug, lang:"en-gb") {
					title
				}
			}
		`

		const variables = {
			slug: body.value,
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