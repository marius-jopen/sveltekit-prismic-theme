<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '$lib/functionality/client/client'

    export async function load() {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Return the data which we got above
        return {
            props: {
				setup
            }
        }
    }
</script>

<script>
    // Import all components which will be used on this page
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
	import LayoutCover from '$lib/modules-static/layouts/layout-cover/layout-cover.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<LayoutCover>
    <span slot="fullscreen">
        Content mobile
    </span>

    <span slot="content">
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
        <br>
        Content to Scroll
    </span>
</LayoutCover>