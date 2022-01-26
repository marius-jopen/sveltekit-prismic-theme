import { client } from '$lib/functions/api/client.js'
import { gql } from '@apollo/client/core/core.cjs.js'

export const post = async () => {
	try {
		const query = gql`
			query {
				allHomes(lang:"en-gb") {
					edges {
						node {
						title
							long_text
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
