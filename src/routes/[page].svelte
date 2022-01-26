<script context="module">
    import Client from '../utils/client'

    export async function load({ page }) {
		const setup = await Client.getSingle('setup')

        const pageName = page.params.page

        const document = await Client.getByUID('page', pageName)

        return {
            props: {
                document,
				setup
            }
        }
    }
</script>

<script>
	import SeoExport from '$lib/functionality/seo/SeoExport.svelte'

	import NavigationDesktopSimple from '$lib/modulesStatic/navigations/desktop/NavigationDesktopSimple.svelte'
	import NavigationMobileSimple from '$lib/modulesStatic/navigations/mobile/NavigationMobileSimple.svelte'

	import ModulesSlices from '$lib/functionality/ModulesSlices.svelte'

    export let document
    export let setup
</script>

<SeoExport document={document.data} />

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<ModulesSlices slices={document.data.body} />