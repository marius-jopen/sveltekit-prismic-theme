<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '../utils/client'

    export async function load({ url }) {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Get current page name
        const pageName = url.pathname.replace('/', '')

        // Get data from the current page
        const document = await Client.getByUID('page', pageName)

        // Return the data which we got above
        return {
            props: {
                document,
				setup
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
    import Seo from '$lib/functionality/seo/seo.svelte'
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
	import ModulesSlices from '$lib/functionality/modules-slices/modules-slices.svelte'

    // Get the data from above
    export let document
    export let setup
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<ModulesSlices slices={document.data.body1} />