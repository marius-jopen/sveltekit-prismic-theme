<script context="module">
    // Import functions which are needed to get data from the CMS
    import Client from '../utils/client'

    export async function load() {
        // Get data from setup page
		const setup = await Client.getSingle('setup')

        // Get data from home page
        const document = await Client.getSingle('home')

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
    import SafeToClipboard from '$lib/functionality/safe-to-clipboard/safe-to-clipboard.svelte';
    
    // Get the data from above
    export let document
	export let setup
</script>

<Seo setup={setup.data} document={document.data} />

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<SafeToClipboard copyText={"Copy me!"} buttonText={"Click me!"}/>