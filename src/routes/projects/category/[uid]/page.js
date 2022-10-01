// Import functions which are needed to get data from the CMS
import createClient from "$lib/prismic/setup/client"

export async function load({ parent }) {
  const api = await createClient()
  const p = await parent()
  const { document, setup } = p

  // Get your data

  if (setup && document) {
    // Return the data which we got above
    return {
      document,
      setup
    };
  }
}



{/* <script context="module">
	// Import functions which are needed to get data from the CMS
	import Prismic from '@prismicio/client';
	import makeClient from '$lib/components/functionality/prismic/client';

	// Import function which uppercases first letter of every word
	import { capitalize } from 'lodash'

	export async function load({ session, params }) {
        // Get api from client and include the session cookie which is important for the preview mode
    	const api = await makeClient(session.cookie)

		// Get current category uid
		const { category } = params;

		// Get data from setup page
		const setup = await api.getSingle('setup');

		// Define the type of the post-type. For example project or product
		const type = 'project';

		// NOTE that tags in Prismic are ALWAYS case sensitive
		// e.g. liquid -> Liquid
		const filteredItems = await api.query([
			Prismic.Predicates.at('document.tags', [capitalize(category)]),
			Prismic.Predicates.at('document.type', type)
		]);

		// A list of all items
		const allItems = await api.query(
			Prismic.Predicates.at('document.type', type)
		);

		// Set document to setup to avoid empty document array for SEO
    	const document = setup

		return {
			props: {
				filteredItems,
				allItems,
				category,
				type,
				setup,
        		document
			}
		};
	}
</script> */}