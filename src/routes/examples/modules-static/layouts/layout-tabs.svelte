<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/components/functionality/prismic/client'

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
    // Modules which are getting imported for the README AREA
    import SvelteMarkdown from 'svelte-markdown'
    import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'

    // Import all components which will be used on this page
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
	import LayoutTabs from '$lib/modules-static/layouts/layout-tabs/layout-tabs.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />
<NavigationMobileSimple data={setup.data} />

<LayoutTabs 
inputTabNumber={2} 
classes={"px-4 py-2 border-lines border-b"}
headline1={"Headline 1"} 
headline2={"Headline 2"} 
headline3={"Headline 3"} 
headline4={"Headline 4"} 
>
    <span slot="slot-1">
        Content Slot 1
    </span>

    <span slot="slot-2">
        Content Slot 2
    </span>

    <span slot="slot-3">
        Content Slot 3
    </span>

    <span slot="slot-4">
        Content Slot 4
    </span>
</LayoutTabs>

<div class="px-3 py-3 text-lg">
    <h3>
        Layout Tabs
    </h3>

    <li>
        Maximum 2-4 slots
    </li>

    <li>
        Displays a tabs bar and the content of it on click
    </li>

    <li>
        Can be styled from outside via props
    </li>
</div>

<HeadlineSimple inputText={"Embed"} inputClasses={"border-t border-lines"} />

<div class="py-4 border-lines border-b overflow-x-scroll w-screen">
    <SvelteMarkdown source={`
        import LayoutTabs from '$lib/modules-static/layouts/layout-tabs/layout-tabs.svelte'

        <LayoutTabs 
        inputTabNumber={2} 
        classes={"px-4 py-2 border-lines border-b"}
        headline1={"Headline 1"} 
        headline2={"Headline 2"} 
        headline3={"Headline 3"} 
        headline4={"Headline 4"} 
        >
            <span slot="slot-1">
                Content Slot 1
            </span>

            <span slot="slot-2">
                Content Slot 2
            </span>

            <span slot="slot-3">
                Content Slot 3
            </span>

            <span slot="slot-4">
                Content Slot 4
            </span>
        </LayoutTabs>
    `}/>
</div>