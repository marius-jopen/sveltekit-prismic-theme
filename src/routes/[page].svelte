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
	import NavigationSimpleBar from '$lib/modules/navigations/desktop-simple/desktopSimpleBar.svelte'
	import NavigationMobileSimple from '$lib/modules/navigations/mobile-simple/mobileNav.svelte'

	import AllSlices from '$lib/modules/slices/allSlices.svelte'

    export let document
    export let setup
</script>

<NavigationSimpleBar data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<AllSlices slices={document.data.body} />