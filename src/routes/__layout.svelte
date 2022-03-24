<script context="module">
	// Import functions which are needed to get data from the CMS
	import makeClient from '$lib/functionality/prismic/client';

	export async function load({ session }) {

    const api = await makeClient(session.cookie)
		// Get data from setup page
		const setup = await api.getSingle('setup');

		// Return the data which we got above
		return {
			props: {
				setup
			}
		};
	}
</script>

<script>
	// Import CSS
	import '../app.postcss';
	import { namespace } from '$lib/functionality/prismic/setup';

	// Import all components which will be used on this page
	// import FooterSimple from '$lib/modules-static/navigations/footer-simple/footer-simple.svelte'

	// Get the data from above
	export let setup;
</script>

<svelte:head>
	<script
		async
		defer
		src="https://static.cdn.prismic.io/prismic.js?new=true&repo={namespace}"></script>
</svelte:head>

<main>
	<!-- Slot where all the pages will get inserted -->
	<div class="bg-neutral-100 min-h-screen w-full">
		<slot />
	</div>

	<!-- Modules which will be inserted on all pages -->
	<!-- <FooterSimple data={setup.data} /> -->
</main>
