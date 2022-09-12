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
    import NavigationDesktopLayeredSlot from '$lib/modules-static/navigations/navigation-desktop-layered-slot/navigation-desktop-layered-slot.svelte'
    import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationDesktopLayeredSlot 
data={setup.data} 
classes={"uppercase tracking-widest text-xs py-1.5 px-4 border-lines border-b"} 
layers="2">
    Slot Content
</NavigationDesktopLayeredSlot>

<NavigationMobileSimple data={setup.data} />

<div class="border-lines px-3 py-3 text-lg">
    <h3>
        Navigation Desktop Layered Slot
    </h3>

    <li>
        A navigation bar with a layer (slot) for some extra content like a filter bar etc… 
    </li>

    <li>
        This layer is optional and can be switched on or off by changing the prop called layers from 1 to 2.
    </li>

    <li>
        Is fixed to the top, but pushes the content down, so it does not hide information
    </li>

    <li>
        Stylable from the outside via prop
    </li>
    
    <li>
        Only the information from the Prismic setup page is needed.
    </li>
</div>

<HeadlineSimple inputText={"Embed"} inputClasses={"border-t border-lines"} />

<div class="py-4 border-lines border-b overflow-x-scroll w-screen">
    <SvelteMarkdown source={`
        import NavigationDesktopLayeredSlot from '$lib/modules-static/navigations/navigation-desktop-layered-slot/navigation-desktop-layered-slot.svelte'

        <NavigationDesktopLayeredSlot 
        data={setup.data} 
        classes={"text-xs py-1.5 bg-white px-4 border-lines border-b uppercase tracking-widest"} 
        layers="2">
            Slot Content
        </NavigationDesktopLayeredSlot>
    `}/>
</div>

<HeadlineSimple inputText={"Json Module"} inputClasses={""} />

<div class="py-4 border-lines border-b overflow-x-scroll w-screen">
    <SvelteMarkdown source={`
        "website_title" : {
            "type" : "StructuredText",
            "config" : {
                "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
                "label" : "Website Title"
            }
        },
        "navigation_top" : {
            "type" : "Group",
            "config" : {
                "fields" : {
                "title" : {
                    "type" : "StructuredText",
                    "config" : {
                    "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
                    "label" : "Title"
                    }
                },
                "uid" : {
                    "type" : "StructuredText",
                    "config" : {
                    "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
                    "label" : "UID"
                    }
                },
                "target" : {
                    "type" : "Boolean",
                    "config" : {
                    "placeholder_false" : "internal",
                    "placeholder_true" : "external",
                    "default_value" : false,
                    "label" : "Target"
                    }
                }
                },
                "label" : "Navigation Top"
            }
        }
    `}/>
</div>