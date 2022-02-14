<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '../../utils/client'

    export async function load({ url }) {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Define the type of the post-type. For example project or product
		const type = 'project'

        // Get current page name
        const pageName = url.pathname.replace('/projects/' , '')

        // Get data from the current page
        const document = await Client.getByUID(type, pageName)

        // Return the data which we got above
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
    // Import all components which will be used on this page
	import NavigationDesktopSlot from '$lib/modules-static/navigations/navigation-desktop-slot/NavigationDesktopSlot.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/NavigationMobileSimple.svelte'
	import BackHistory from "$lib/functionality/back-history/BackHistory.svelte"
	import LayoutCover from '$lib/modules-static/layouts/layout-cover/LayoutCover.svelte'
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/HeadlineSimple.svelte'
	import ImageFullWidth from "$lib/modules-flex/images/image-full-width/ImageFullWidth.svelte"

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSlot data={setup.data}>
	<BackHistory />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<LayoutCover input={document} />
<HeadlineSimple inputHeadline={document.data.title[0].text} />
<ImageFullWidth inputImage={document.data.thumbnail} />