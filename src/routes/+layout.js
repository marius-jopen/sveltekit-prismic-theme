	// Import functions which are needed to get data from the CMS
	import createClient from "$lib/services/prismic/client"

	export async function load() {
    const api = await createClient()
		
		// Get data from setup page
		const setup = await api.getSingle('setup');

		// Get data from home page
		const document = await api.getSingle('home');

    if (setup && document) {      
      // Return the data which we got above
      return {
        document,
        setup
      };
    }
	}
