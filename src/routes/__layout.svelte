<script context="module">
	// Import functions which are needed to get data from the CMS
	import makeClient from '$lib/components/functionality/prismic/client';

	export async function load({ session }) {
		// Get api from client and include the session cookie which is important for the preview mode
    	const api = await makeClient(session.cookie)

		// Get data from setup page
		const setup = await api.getSingle('setup');

		// Return the data which we got above
		return {
			props: {
				setup // Is not is use right now, but can be used for footer etc…
			}
		};
	}
</script>

<script>
	// Import CSS
	import '../app.postcss';

	// Import the prismic repo name
	import { namespace } from '$lib/components/functionality/prismic/setup';
</script>

<svelte:head>
	<!-- Import the script which checks if this page is in preview mode -->
	<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>	
</svelte:head>

<main>
	<!-- Just making the background grey and giving it a min height for the example theme. Remove if is not needed. -->
	<div class="bg-neutral-100 min-h-screen w-full">
		<!-- Slot where all the pages will get inserted -->
		<slot />
	</div>
</main>
