<script context="module">
    import Client from '../../utils/client'

    export async function load({ page }) {
		const setup = await Client.getSingle('setup')

		const type = 'project'

        const pageName = page.params.project

        const document = await Client.getByUID(type, pageName)

        return {
            props: {
                document,
				type,
				setup
            }
        }
    }
</script>

<script>
	import NavigationDesktopSlot from '$lib/modulesStatic/navigations/NavigationDesktopSlot/NavigationDesktopSlot.svelte'
	import NavigationMobileSimple from '$lib/modulesStatic/navigations/NavigationMobileSimple/NavigationMobileSimple.svelte'
	import LayoutCover from '$lib/modulesStatic/single/layoutCover/LayoutCover.svelte'
	import BackHistory from "$lib/functionality/BackHistory.svelte"

    export let document
	export let setup
</script>

<NavigationDesktopSlot data={setup.data}>
	<BackHistory />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<LayoutCover input={document} />