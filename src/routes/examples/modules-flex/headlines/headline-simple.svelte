<script context="module">
    // Import functions which are needed to get data from the CMS
    import makeClient from '$lib/functionality/prismic/client'

    export async function load({ session }) {
        // Get api from client and include the session cookie which is important for the preview mode
        const api = await makeClient(session.cookie)

        // Get data from setup page
		const setup = await api.getSingle('setup')

        // Get data from all-modules page
        const document = await api.getSingle('all_modules')

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
    // Modules which are getting imported for the README AREA
    import SvelteMarkdown from 'svelte-markdown'
	import Text from '$lib/modules-basic/text.svelte'
    import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'

    // Import all components which will be used on this page
    import NavigationDesktopSimple from '$lib/modules-static/navigations/navigation-desktop-simple/navigation-desktop-simple.svelte'
	import NavigationMobileSimple from '$lib/modules-static/navigations/navigation-mobile-simple/navigation-mobile-simple.svelte'

    // Get the data from above
    export let document
	export let setup
</script>

<NavigationDesktopSimple data={setup.data} />

<NavigationMobileSimple data={setup.data} />

<HeadlineSimple inputText={document.data.headline_simple_text[0].text} inputClasses={""} />

<!-- README AREA -->

<HeadlineSimple inputText={"Headline Simple"} inputClasses={""} />

<div class="py-2 px-4">
    <li>
        Displays a headline
    </li>

    <li>
        Classes prop, so each headline can be styled from outside if wanted
    </li>

    <li>
        Included in Module Slicer
    </li>
</div>

<HeadlineSimple inputText={"Embed"} inputClasses={"border-t border-lines"} />

<div class="py-4 border-lines border-b overflox-x-scroll">
    <SvelteMarkdown source={`
        import HeadlineSimple from '$lib/modules-flex/headlines/headline-simple/headline-simple.svelte'

        <HeadlineSimple inputText={document.data.headline_simple_text[0].text} inputClasses={""} />
    `}/>
</div>

<HeadlineSimple inputText={"Json Module"} inputClasses={""} />

<div class="py-4 border-lines border-b overflox-x-scroll">
    <SvelteMarkdown source={`
        "headline_simple_text" : {
            "type" : "StructuredText",
            "config" : {
            "single" : "heading1,heading2,heading3,heading4,heading5,heading6",
            "label" : "Headline Simple Text"
            }
        }
    `}/>
</div>

<HeadlineSimple inputText={"Json Slice"} inputClasses={""} />

<div class="py-4 border-lines border-b overflox-x-scroll">
    <SvelteMarkdown source={`
        "headline_simple": {
            "type": "Slice",
            "fieldset": "Headline Simple",
            "description": "Simple Headline",
            "icon": "format_color_text",
            "display": "list",
            "non-repeat": {
              "text": {
                "type": "StructuredText",
                "config": {
                  "single": "heading1,heading2,heading3,heading4,heading5,heading6",
                  "label": "Text"
                }
              }
            },
            "repeat": {}
          }
    `}/>
</div>