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
	import NavigationSlot from '$lib/modules/navigations/desktop-slot/desktopSlotBar.svelte'
	import NavigationMobileSimple from '$lib/modules/navigations/mobile-simple/mobileNav.svelte'

	import HeadlineSimple from '$lib/modules/slices/headlines/headlineSimple.svelte'
	import ImageSimple from "$lib/modules/slices/images/imageSimple.svelte"
	import BackHistory from "$lib/modules/functionality/backHistory.svelte"

    export let document
	export let setup
</script>

<NavigationSlot data={setup.data}>
	<BackHistory />
</NavigationSlot>
<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputHeadline={document.data.title[0].text} />
<ImageSimple inputImage={document.data.thumbnail} />