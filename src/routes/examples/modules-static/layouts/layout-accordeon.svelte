<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/functionality/prismic/client'

    export async function load({ session }) {
        // Get api from client and include the session cookie which is important for the preview mode
        const api = await makeClient(session.cookie)

        // Get data from setup page
		const setup = await api.getSingle('setup')

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
	import LayoutAccordeon from '$lib/modules-static/layouts/layout-accordeon/layout-accordeon.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<LayoutAccordeon inputHeadline={"This is a headline"}>
    Content
    <br>
    Content
    <br>
    Content
    <br>
    Content
</LayoutAccordeon> 

<div class="border-b border-lines px-3 py-3 text-lg">
    <h3>
        Layout Accordeon
    </h3>

    <li>
        Headline gets passed as prop
    </li>

    <li>
        Content via slot
    </li>
</div>