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
    // Modules which are getting imported for the README AREA
    import SvelteMarkdown from 'svelte-markdown'
    import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'

    // Import all components which will be used on this page
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
    import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'
    import FooterStretched from '$lib/modules-static/navigations/footer-stretched/footer-stretched.svelte'

    // Get the data from above
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<FooterStretched data={setup.data} classes={"tracking-widest text-xs text-x py-1.5 px-4"} />

<div class="px-3 py-3 text-lg">
    <h3>
        Footer Stretched
    </h3>

    <li>
        Desktop only
    </li>

    <li>
        Displays the name and the footer navigation.
    </li>

    <li>
        Style from outside via props
    </li>
</div>

<HeadlineSimple inputText={"Embed"} inputClasses={"border-t border-lines"} />

<div class="py-4 border-lines border-b overflow-x-scroll w-screen">
    <SvelteMarkdown source={`
        import FooterStretched from '$lib/modules-static/navigations/footer-stretched/footer-stretched.svelte'

        <FooterStretched data={setup.data} classes={"tracking-widest text-xs text-x py-1.5 px-4"} />
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
        "navigation_bottom" : {
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
                "uid1" : {
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
                    "default_value" : true,
                    "label" : "Target"
                    }
                }
                },
                "label" : "Navigation Bottom"
            }
        }
    `}/>
</div>