<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '$lib/functionality/client/client'

    export async function load() {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Get data from all-modules page
        const document = await Client.getSingle('all_modules')

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
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import NavigationFullBackground from '$lib/modules-flex/navigations/navigation-full-background/navigation-full-background.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<NavigationFullBackground inputNavigation={document.data.navigation_full_background_loop} inputMobileImage={document.data.navigation_full_background_image_mobile} />

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Navigation Full Background
    </h3>

    <li>
        On hover on the left, the image on the right changes
    </li>

    <li>
        Simple version for mobile with one image
    </li>
</div>