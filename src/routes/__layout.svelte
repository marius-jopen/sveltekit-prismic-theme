<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '../utils/client'

    export async function load() {
        // Get data from setup page
        const setup = await Client.getSingle('setup')

        // Return the data which we got above
        return {
            props: {
                setup,
            }
        }
    }
</script>

<script>
    // Import CSS
	import '../app.postcss'

    // Import all components which will be used on this page
    import FooterSimple from '$lib/modulesStatic/navigations/FooterSimple/FooterSimple.svelte'

    // Get the data from above
	export let setup
</script>

<main>
    <!-- Slot where all the pages will get inserted -->
	<slot />

    <!-- Modules which will be inserted on all pages -->
    <FooterSimple data={setup.data} />
</main>