<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '../utils/client'

    export async function load({ page }) {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Get current page name
        const pageName = page.params.page

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
	import NavigationDesktopSimple from '$lib/modulesStatic/navigations/NavigationDesktopSimple/NavigationDesktopSimple.svelte'
	import NavigationMobileSimple from '$lib/modulesStatic/navigations/mobile/NavigationMobileSimple.svelte'
	import ModulesSlices from '$lib/functionality/ModulesSlices.svelte'

    // Get the data from above
    export let document
    export let setup
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />
<ModulesSlices slices={document.data.body} />