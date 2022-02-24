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
    import Seo from '$lib/functionality/seo/seo.svelte'
    import NavigationDesktopSlot from '$lib/modules-static/navigations/navigation-desktop-slot/navigation-desktop-slot.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
	import BackHistory from "$lib/functionality/back-history/back-history.svelte"
	import LayoutCover from '$lib/modules-static/layouts/layout-cover/layout-cover.svelte'
	import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'
	import LayoutColumn from '$lib/modules-static/layouts/layout-column/layout-column.svelte'
    import SliderComplex from '$lib/modules-flex/sliders/slider-complex/slider-complex.svelte'
    import SliderVideoFull from '$lib/modules-flex/sliders/slider-video-full/slider-video-full.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopSlot data={setup.data}>
	<BackHistory />
</NavigationDesktopSlot>
<NavigationMobileSimple data={setup.data} />

<LayoutCover input={document} />
<HeadlineSimple inputText={document.data.title[0].text} />
<LayoutColumn input={document} />